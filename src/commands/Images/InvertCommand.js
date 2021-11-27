const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class InvertCommand extends BaseCommand {
  constructor() {
    super('invert', 'images', []);
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

    try {
      const button0 = new MessageButton()
      .setStyle('red')
      .setID('delete0')
      .setLabel('OK');

      if (db.get(`${message.guild.id}_premium`) !== 'on') {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(NO + ' Komenda `' + CMD + '` jest dostępna dla serwerów **PREMIUM**');

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }

      const member = message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args.join(' ').toLowerCase()) || message.mentions.members.first() || message.member;
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(member.user.tag, member.user.avatarURL({ format: 'png', dynamic: true }) || client.av, db.get(`${member.user.id}_link1`) || member.user.avatarURL({ format: 'png', dynamic: true }) || client.av)
      .setImage(`https://some-random-api.ml/canvas/invert?avatar=${member.user.avatarURL({ format: 'png', dynamic: true }) || client.av}`);

      return message.lineReplyNoMention(embed0);

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