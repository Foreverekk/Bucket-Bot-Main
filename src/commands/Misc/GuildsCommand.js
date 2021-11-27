const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GuildsCommand extends BaseCommand {
  constructor() {
    super('guilds', 'other', ['serverslist']);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageButton, MessageActionRow } = require('discord-buttons');
    const NO = client.no;

    try {
        const button0 = new MessageButton()
        .setStyle('red')
        .setID('delete0')
        .setLabel('OK');

        if (message.author.id !== '607937967130017807' && message.author.id !== '444177942902472704') {
            const embed0 = new Discord.MessageEmbed()
            .setColor(client.cNeg)
            .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
            .setDescription(`${NO} Nie posiadasz wymaganych uprawnień! ${client.sadeg}`);
    
            return message.channel.send({
              buttons: button0,
              embed: embed0
            });
          }
      
            let i0 = 0;
            let i1 = 10;
            let page = 1;

            let description =
              `**${client.guilds.cache.size}** serwerów\n\n` +
              client.guilds.cache
                .sort((a, b) => b.memberCount - a.memberCount)
                .map(r => r)
                .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Użytkowników\nID - ${r.id}`)
                .slice(0, 10)
                .join('\n');
      
            let embed = new Discord.MessageEmbed()
              .setAuthor(
                message.author.tag,
                message.author.displayAvatarURL({ dynamic: true })
              )
              .setColor(client.cPoz)
              .setFooter(client.user.username)
              .setTitle(`Strona - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)
              .setDescription(description);
      
            let msg = await message.channel.send(embed);
      
            await msg.react('⬅');
            await msg.react('➡');
            await msg.react('❌');
      
            let collector = msg.createReactionCollector(
              (reaction, user) => user.id === message.author.id
            );
      
            collector.on('collect', async (reaction, user) => {
              if (reaction._emoji.name === '⬅') {
                i0 = i0 - 10;
                i1 = i1 - 10;
                page = page - 1;
      
                // jeśli strona jest pusta - usuń wiadomość
                if (i0 + 1 < 0) {
                  console.log(i0)
                  return msg.delete();
                }
                if (!i0 || !i1) {
                  return msg.delete();
                }
      
                description =
                  `**${client.guilds.cache.size}** serwerów\n\n` +
                  client.guilds.cache
                    .sort((a, b) => b.memberCount - a.memberCount)
                    .map(r => r)
                    .map(
                      (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Użytkowników`
                    )
                    .slice(i0, i1)
                    .join('\n');
      
                embed
                  .setTitle(
                    `Strona - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
                  )
                  .setDescription(description);
      
                msg.edit(embed);
              }
      
              if (reaction._emoji.name === '➡') {
                i0 = i0 + 10;
                i1 = i1 + 10;
                page = page + 1;
      
                // jeśli strona jest pusta - usuń wiadomość
                if (i1 > client.guilds.cache.size + 10) {
                  return msg.delete();
                }
                if (!i0 || !i1) {
                  return msg.delete();
                }
      
                description =
                  `**${client.guilds.cache.size}** serwerów\n\n` +
                  client.guilds.cache
                    .sort((a, b) => b.memberCount - a.memberCount)
                    .map(r => r)
                    .map(
                      (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Użytkowników`
                    )
                    .slice(i0, i1)
                    .join('\n');
      
                embed
                  .setTitle(
                    `Strona - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`
                  )
                  .setDescription(description);
      
                msg.edit(embed);
              }
      
              if (reaction._emoji.name === '❌') {
                return msg.delete();
              }
      
              await reaction.users.remove(message.author.id);
            });

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
      };