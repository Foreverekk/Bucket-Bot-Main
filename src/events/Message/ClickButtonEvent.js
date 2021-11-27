const BaseEvent = require('../../utils/structures/BaseEvent');//12.5.3
const talkedRecently = new Set();
const talkedRecently0 = new Set();
const talkedRecently1 = new Set();
const talkedRecently2 = new Set();

module.exports = class ClickButtonEvent extends BaseEvent {
  constructor() {
    super('clickButton');
  }
  
  async run(client, button) {
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageButton, MessageActionRow, MessageMenu, MessageMenuOption } = require('discord-buttons');
    const snekfetch = require('snekfetch');
    const axios = require('axios');

    try {
        if (talkedRecently.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently.delete(button.message.guild.id);
            }, 1500);

        if (button.id === 'avatar0') {
            if (talkedRecently0.has(button.clicker.id)) {
                return button.reply.defer();
            } else {
                talkedRecently0.add(button.clicker.id);
                setTimeout(() => {
                  talkedRecently0.delete(button.clicker.id);
                }, 2500);

            const member = button.message.guild.members.cache.random();
            const memberr = button.message.guild.members.cache.get(button.clicker.id);
            const avatar = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
            const embed0 = new Discord.MessageEmbed()
            .setColor(member.displayHexColor || 'RANDOM')
            .setAuthor(`${member.displayName}'s avatar (${member.roles.highest.name})`, avatar, db.get(`${member.id}_link1`) || avatar)
            .setImage(avatar)
            .setFooter(`Clicker: ${memberr.user.tag}`)

            const button0 = new MessageButton()
            .setStyle('url')
            .setURL(avatar)
            .setLabel('PNG');
            const button1 = new MessageButton()
            .setStyle('url')
            .setURL(avatar)
            .setLabel('JPG');
            const button2 = new MessageButton()
            .setStyle('url')
            .setURL(avatar)
            .setLabel('WEBP');
            const button3 = new MessageButton()
            .setStyle('blurple')
            .setID('avatar0')
            .setLabel('NEXT');

            if (avatar === client.av || !avatar) {
                button1.setDisabled(true);
                button2.setDisabled(true);
              }
            
            button.message.edit({
                buttons: [button0, button1, button2, button3],
                embed: embed0
            });
            return button.reply.defer();
        }
    };

    if (button.id === 'delete0') {
        if (talkedRecently1.has(button.clicker.id)) {
            return button.reply.defer();
        } else {
            talkedRecently1.add(button.clicker.id);
            setTimeout(() => {
              talkedRecently1.delete(button.clicker.id);
            }, 2500);
        
        return button.message.delete();
    }
}
    if (button.id === 'anime0') {
        if (talkedRecently2.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently2.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently2.delete(button.message.guild.id);
            }, 3500);
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              const { body } = await snekfetch.get('https://nekos.life/api/v2/img/avatar');
              const embed0 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setImage(body.url)
              .setFooter(`Clicker: ${member.user.tag}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('anime0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}
    if (button.id === 'chu0') {
        if (talkedRecently2.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently2.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently2.delete(button.message.guild.id);
            }, 3500);
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              var cmd = 'chu';
              var res = await axios.get('https://rra.ram.moe/i/r', {params: {'type': cmd}});
              var path = res.data.path.replace('/i/', '');
              const embed0 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setImage('https://cdn.ram.moe/' + path)
              .setFooter(`Clicker: ${member.user.tag}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('chu0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}
    if (button.id === 'cute0') {
        if (talkedRecently2.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently2.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently2.delete(button.message.guild.id);
            }, 3500);
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              var cmd = 'cute';
              var res = await axios.get('https://rra.ram.moe/i/r', {params: {'type': cmd}});
              var path = res.data.path.replace('/i/', '');
              const embed0 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setImage('https://cdn.ram.moe/' + path)
              .setFooter(`Clicker: ${member.user.tag}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('cute0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}
    if (button.id === 'nyan0') {
        if (talkedRecently2.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently2.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently2.delete(button.message.guild.id);
            }, 3500);
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              var cmd = 'nyan';
              var res = await axios.get('https://rra.ram.moe/i/r', {params: {'type': cmd}});
              var path = res.data.path.replace('/i/', '');
              const embed0 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setImage('https://cdn.ram.moe/' + path)
              .setFooter(`Clicker: ${member.user.tag}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('nyan0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}
    if (button.id === 'owo0') {
        if (talkedRecently2.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently2.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently2.delete(button.message.guild.id);
            }, 3500);
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              var cmd = 'owo';
              var res = await axios.get('https://rra.ram.moe/i/r', {params: {'type': cmd}});
              var path = res.data.path.replace('/i/', '');
              const embed0 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setImage('https://cdn.ram.moe/' + path)
              .setFooter(`Clicker: ${member.user.tag}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('owo0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}
    if (button.id === 'potato0') {
        if (talkedRecently2.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently2.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently2.delete(button.message.guild.id);
            }, 3500);
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              var cmd = 'potato';
              var res = await axios.get('https://rra.ram.moe/i/r', {params: {'type': cmd}});
              var path = res.data.path.replace('/i/', '');
              const embed0 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setImage('https://cdn.ram.moe/' + path)
              .setFooter(`Clicker: ${member.user.tag}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('potato0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}
    if (button.id === 'token0') {
        if (talkedRecently2.has(button.message.guild.id)) {
            return button.reply.defer();
        } else {
            talkedRecently2.add(button.message.guild.id);
            setTimeout(() => {
              talkedRecently2.delete(button.message.guild.id);
            }, 3500);
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              const { body } = await snekfetch.get('https://some-random-api.ml/bottoken');
              const embed0 = new Discord.MessageEmbed()
              .setColor('RANDOM')
              .setAuthor('Token Generator', member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av, db.get(`${member.user.id}_link1`) || member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av)
              .setDescription('```' + body.token + '```')
              .setFooter(`Clicker: ${member.user.tag}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('token0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}
    if (button.id === 'color0') {
        if (talkedRecently1.has(button.clicker.id)) {
            return button.reply.defer();
        } else {
            talkedRecently1.add(button.clicker.id);
            setTimeout(() => {
              talkedRecently1.delete(button.clicker.id);
            }, 2500);
        
            const kolor = (function co(lor) {
                return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][
                  Math.floor(Math.random() * 16)
                ]) && lor.length == 6
                  ? lor
                  : co(lor);
              })('');
          
              const member = button.message.guild.members.cache.get(button.clicker.id);
              const AV = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
              const embed0 = new Discord.MessageEmbed()
              .setColor(kolor)
              .setAuthor('Hex:', AV, db.get(`${button.clicker.id}_link1`) || AV)
              .setTitle(`🌈 #${kolor}`);
        
              const button0 = new MessageButton()
              .setStyle('blurple')
              .setID('color0')
              .setLabel('NEXT');
          
              button.message.edit({
                buttons: button0,
                embed: embed0
              });
              return button.reply.defer();
    }
}

        else {
            return;
        }
    }
    } catch (err) {
        return console.log(err);
    }
}
};