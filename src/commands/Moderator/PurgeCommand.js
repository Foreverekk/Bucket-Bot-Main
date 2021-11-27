const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderator', ['clear', 'wyczysc', 'wyczyśc', 'wyczysć', 'wyczyść', 'cofnij']);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, client.cd);
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageButton, MessageActionRow } = require('discord-buttons');
    const NO = client.no;

    try {
      const button0 = new MessageButton()
      .setStyle('red')
      .setID('delete0')
      .setLabel('OK');

      if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('ADMINISTRATOR')) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Nie posiadasz wymaganych uprawnień. ${client.sadeg}`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }
      if (!message.guild.me.hasPermission('MANAGE_MESSAGES') && !message.guild.me.hasPermission('ADMINISTRATOR')) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Nie posiadam wymaganych uprawnień. ${client.sadeg}`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }
      if (isNaN(args[0])) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Ile wiadomości mam usunąć? (1 – 100)`)
        .setFooter(`${PREFIX}${CMD} <ilość> [-bots | @user | -users | -links | -invites | -files | -pins | -emojis]`);
      
        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }
      if (args[0] > 100) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Ile wiadomości mam usunąć? (1 – **100**)`)
        .setFooter(`${PREFIX}${CMD} <ilość> [-bots | @user | -users | -links | -invites | -files | -pins | -emojis]`);
      
        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }

      if (args[0] < 1) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Ile wiadomości mam usunąć? (**1** – 100)`)
        .setFooter(`${PREFIX}${CMD} <ilość> [-bots | @user | -users | -links | -invites | -files | -pins | -emojis]`);
      
        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }

          if (args[1] === '-links' || args[1] === '-link' || args[1] === 'links' || args[1] === 'link') {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
                const zawiera = fetched.filter(fetchedMsg => fetchedMsg.content.includes('http'));
                const zawiera2 = fetched.filter(fetchedMsg => fetchedMsg.content.includes('www.'));
                const zawiera3 = fetched.filter(fetchedMsg => fetchedMsg.content.includes('discord.gg'));
          
    
                message.channel.bulkDelete(zawiera, true)
                .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości z linkami HTTP!**`).then(msg => msg.delete({ timeout: 4000 }))).catch(() => null);
                
      
      
                message.channel.bulkDelete(zawiera2, true)
                .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości z linkami WWW.!**`).then(msg => msg.delete({ timeout: 4000 }))).catch(() => null);
                
      
      
                message.channel.bulkDelete(zawiera3, true)
                .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości z linkami DISCORD!**`).then(msg => msg.delete({ timeout: 4000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor('PURPLE')
                  .setTitle('[PURGE] -links')
                  .addField('Usunięto', `**${zawiera.size}** | **${zawiera2.size}** | **${zawiera3.size}**/**${args[0]}** wiadomości z linkami`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);

          } else {
          if (args[1] == '-invites' || args[1] == '-invite' || args[1] == 'invites' || args[1] == 'invite') {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
                const zawiera = fetched.filter(fetchedMsg => fetchedMsg.content.includes('discord.gg'));
                const zawiera0 = fetched.filter(fetchedMsg => fetchedMsg.content.includes('https://discord.gg'));

    
                message.channel.bulkDelete(zawiera0, true)
                message.channel.bulkDelete(zawiera, true)
                .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości z zaproszeniami!**`).then(msg => msg.delete({ timeout: 4000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor('PURPLE')
                  .setTitle('[PURGE] -invites')
                  .addField('Usunięto', `**${zawiera.size}**/**${args[0]}** wiadomości z zaproszeniami`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);

          } else {
          if (args[1] == '-files' || args[1] == '-file' || args[1] == 'files' || args[1] == 'file') {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
              const zawiera = fetched.filter(fetchedMsg => fetchedMsg.attachments.size > 0);
          
    
              message.channel.bulkDelete(zawiera, true)
              .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości zawierające zdjęcia i pliki!**`).then(msg => msg.delete({ timeout: 6000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor('PURPLE')
                  .setTitle('[PURGE] -files')
                  .addField('Usunięto', `**${zawiera.size}**/**${args[0]}** wiadomości z plikami/zdjęciami`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);
          } else {
          if (args[1] == '-bots' || args[1] == '-bot' || args[1] == 'bots' || args[1] == 'bot') {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
              const zawiera = fetched.filter(fetchedMsg => fetchedMsg.author.bot === true);
          
    
              message.channel.bulkDelete(zawiera, true)
              .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości botów!**`).then(msg => msg.delete({ timeout: 6000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor('PURPLE')
                  .setTitle('[PURGE] -bots')
                  .addField('Usunięto', `**${zawiera.size}**/**${args[0]}** wiadomości botów`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);
          } else {
          if (args[1] == '-pins' || args[1] == '-pin' || args[1] == 'pins' || args[1] == 'pin') {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
              const zawiera = fetched.filter(fetchedMsg => fetchedMsg.pinned === false);
          
    
              message.channel.bulkDelete(zawiera, true)
              .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości omijając przypięte!**`).then(msg => msg.delete({ timeout: 6000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor('PURPLE')
                  .setTitle('[PURGE] -pins')
                  .addField('Usunięto', `**${zawiera.size}**/**${args[0]}** wiadomości omijając przypięte`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);
          } else {
          if (args[1] == '-emojis' || args[1] == '-emoji' || args[1] == 'emojis' || args[1] == 'emoji') {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
              const zawiera = fetched.filter(fetchedMsg => fetchedMsg.content.match("^(:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>)+$"));
          
    
              message.channel.bulkDelete(zawiera, true)
              .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości z emotkami!**`).then(msg => msg.delete({ timeout: 6000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor('PURPLE')
                  .setTitle('[PURGE] -emojis')
                  .addField('Usunięto', `**${zawiera.size}**/**${args[0]}** wiadomości z emotkami`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);
          } else if (message.mentions.members.first()) {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
              const zawiera = fetched.filter(fetchedMsg => fetchedMsg.author.id === message.mentions.members.first().id);
          
    
              message.channel.bulkDelete(zawiera, true)
              .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości użytkownika ${message.mentions.members.first()}!**`).then(msg => msg.delete({ timeout: 6000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor("PURPLE")
                  .setTitle("[PURGE] @user")
                  .addField("Usunięto", `**${zawiera.size}**/**${args[0]}** wiadomości użytkownika <@${message.mentions.members.first()}>`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);
          } else {
          if (args[1] == '-users' || args[1] == '-user' || args[1] == 'users' || args[1] == 'user') {
            message.delete();
            setTimeout(function(){ 
            message.channel.messages.fetch({ limit: args[0] })
            .then(fetched => {
              const zawiera = fetched.filter(fetchedMsg => fetchedMsg.author.bot === false);
          
    
              message.channel.bulkDelete(zawiera, true)
              .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości użytkowników omijając boty!**`).then(msg => msg.delete({ timeout: 6000 }))).catch(() => null);
    
                if (db.get(`${message.guild.id}_logs`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor('PURPLE')
                  .setTitle('[PURGE] -users')
                  .addField('Usunięto', `**${zawiera.size}**/**${args[0]}** wiadomości użytkowników omijając boty`)
                  .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
                  .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
                  .setFooter(`[@${message.author.id}]`, AV)
                  .setTimestamp();
            
                  const kanal = db.get(`${message.guild.id}_logs_channel`);
                  if (!kanal) return;
                  client.channels.cache.get(kanal).send(embed0);
              }
              return;
              
            })
            .catch(console.error);
        }, 250);
          } else {

          message.delete();
          setTimeout(function(){ 
              message.channel.bulkDelete(args[0])
              .then(messages => message.channel.send(`**Usunięto \`${messages.size}/${args[0]}\` wiadomości!**`).then(msg => msg.delete({ timeout: 6000 }))).catch(() => null);
          }, 250);

          if (db.get(`${message.guild.id}_logs`) === 'on') {
            const embed0 = new Discord.MessageEmbed()
            .setColor('PURPLE')
            .setTitle('[PURGE]')
            .addField('Usunięto', `**${args[0]}**/**${args[0]} wiadomości`)
            .addField('Moderator', `<@${message.author.id}> [${message.member.user.tag}]`)
            .addField('Kanał', `<#${message.channel.id}> [#${message.channel.name}]`)
            .setFooter(`[@${message.author.id}]`, AV)
            .setTimestamp();
      
            const kanal = db.get(`${message.guild.id}_logs_channel`);
            if (!kanal) return;
            client.channels.cache.get(kanal).send(embed0);
          }
          }
        }
        }
      }
    }
  }
}

} catch (err) {
  embederr.setDescription('```' + err.message + '```');

  try {
    message.channel.send(embederr);
    embederr.setFooter(`gID: ${message.guild.id}, gN: ${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || client.av);
    if (db.get('bot_errors') === 'on') return client.channels.cache.get(db.get('bot_errors_channel')).send(embederr);
  } catch (err) {
    return;
  }
}
}
}
};