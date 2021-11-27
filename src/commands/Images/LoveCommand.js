const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class LoveCommand extends BaseCommand {
  constructor() {
    super('love', 'images', ['lov']);
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
    const snekfetch = require('snekfetch');
    const { MessageButton, MessageActionRow } = require('discord-buttons');
    const NO = client.no;

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

      let member1;
      let member2;
      if (args[0]) member1 = message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args[0].toLowerCase()) || message.mentions.members.first();
      if (args[1]) member2 = message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[1].toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args[1].toLowerCase()) || message.guild.members.cache.find(m => m.user.username === args[1]) || message.guild.members.cache.find(m => m.user.tag === args[1]) || message.mentions.members.array()[1];

      if (!args[0] || !member1) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Oznacz pierwszą osobę ${client.madge}`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }

      if (!args[1] || !member2) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Nie podano drugiej osoby! ${client.madge}`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }

      const { body } = await snekfetch.get(`https://nekobot.xyz/api/imagegen?type=ship&user1=${member1.user.avatarURL({ format: 'png', dynamic: false, size: 512 }) || client.av}&user2=${member2.user.avatarURL({ format: 'png', dynamic: false, size: 512 }) || client.av}`);
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage(body.message);

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