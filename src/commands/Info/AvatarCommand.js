const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'info', ['av', 'awatar', 'aw']);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
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

    try {
      let arg0 = '';
      if (args[0]) arg0 = args[0];
      if (arg0.toLowerCase() === 'guild' || arg0.toLowerCase() === 'server' || arg0.toLowerCase() === 'serwer') {
        const avatar = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
        const avatarjpg = message.guild.iconURL({ format: 'jpg', dynamic: false, size: 1024 }) || client.av;
        const avatarwebp = message.guild.iconURL({ format: 'webp', dynamic: true, size: 1024 }) || client.av;
        const embed0 = new Discord.MessageEmbed()
        .setColor(message.member.displayHexColor || 'RANDOM')
        .setAuthor(`${message.guild.name}'s avatar (Guild)`, avatar, message.guild.vanityURLCode || avatar)
        .setImage(avatar);

        const button0 = new MessageButton()
        .setStyle('url')
        .setURL(avatar)
        .setLabel('PNG');
        const button1 = new MessageButton()
        .setStyle('url')
        .setURL(avatarjpg)
        .setLabel('JPG');
        const button2 = new MessageButton()
        .setStyle('url')
        .setURL(avatarwebp)
        .setLabel('WEBP');

        if (avatar === client.av || !avatar) {
          button1.setDisabled(true);
          button2.setDisabled(true);
        }

        return message.channel.send({
          content: `<@${message.author.id}>`,
          buttons: [button0, button1, button2],
          embed: embed0
        });
      }

      if (arg0.toLowerCase() === 'random' || arg0.toLowerCase() === 'r') {
        const member = message.guild.members.cache.random();
        const avatar = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
        const avatarjpg = member.user.avatarURL({ format: 'jpg', dynamic: false, size: 1024 }) || client.av;
        const avatarwebp = member.user.avatarURL({ format: 'webp', dynamic: true, size: 1024 }) || client.av;
        const embed0 = new Discord.MessageEmbed()
        .setColor(member.displayHexColor || 'RANDOM')
        .setAuthor(`${member.displayName}'s avatar (${member.roles.highest.name})`, avatar, db.get(`${member.id}_link1`) || avatar)
        .setImage(avatar);

        const button0 = new MessageButton()
        .setStyle('url')
        .setURL(avatar)
        .setLabel('PNG');
        const button1 = new MessageButton()
        .setStyle('url')
        .setURL(avatarjpg)
        .setLabel('JPG');
        const button2 = new MessageButton()
        .setStyle('url')
        .setURL(avatarwebp)
        .setLabel('WEBP');
        const button3 = new MessageButton()
        .setStyle('blurple')
        .setID('avatar0')
        .setLabel('NEXT');

        if (avatar === client.av || !avatar) {
          button1.setDisabled(true);
          button2.setDisabled(true);
        }

        return message.channel.send({
          content: `<@${message.author.id}>`,
          buttons: [button0, button1, button2, button3],
          embed: embed0
        });
      }

      const member = message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args.join(' ').toLowerCase()) || message.mentions.members.first() || message.member;
      const avatar = member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
      const avatarjpg = member.user.avatarURL({ format: 'jpg', dynamic: false, size: 1024 }) || client.av;
      const avatarwebp = member.user.avatarURL({ format: 'webp', dynamic: true, size: 1024 }) || client.av;
      const embed1 = new Discord.MessageEmbed()
      .setColor(member.displayHexColor || 'RANDOM')
      .setAuthor(`${member.displayName}'s avatar (${member.roles.highest.name})`, avatar, db.get(`${member.id}_link1`) || avatar)
      .setImage(avatar);

      const button0 = new MessageButton()
      .setStyle('url')
      .setURL(avatar)
      .setLabel('PNG');
      const button1 = new MessageButton()
      .setStyle('url')
      .setURL(avatarjpg)
      .setLabel('JPG');
      const button2 = new MessageButton()
      .setStyle('url')
      .setURL(avatarwebp)
      .setLabel('WEBP');

      if (avatar === client.av || !avatar) {
        button1.setDisabled(true);
        button2.setDisabled(true);
      }
  
      return message.channel.send({
        content: '<@' + message.author.id + '>',
        buttons: [button0, button1, button2],
        embed: embed1
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
    }
    };