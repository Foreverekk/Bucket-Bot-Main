const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class ClydeCommand extends BaseCommand {
  constructor() {
    super('clyde', 'images', []);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 5000);
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageButton, MessageActionRow } = require('discord-buttons');
    const fetch = require('node-fetch');
    const NO = client.no;

    try {
        const button0 = new MessageButton()
        .setStyle('red')
        .setID('delete0')
        .setLabel('OK');

        if (!args[0]) {
            const embed0 = new Discord.MessageEmbed()
            .setColor(client.cNeg)
            .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
            .setDescription(`${NO} Dopisz coś fajnego`);
    
            return message.channel.send({
              buttons: button0,
              embed: embed0
            });
          }

        message.channel.startTyping();
        const member = message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args.join(' ').toLowerCase()) || message.mentions.members.first() || message.member;
        let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${args.join(' ')}`));
        let json = await res.json();
        let attachment = new Discord.MessageAttachment(json.message, `clyde-${message.member.user.username}.png`);

        message.channel.stopTyping();
        return message.lineReplyNoMention(attachment);
  
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