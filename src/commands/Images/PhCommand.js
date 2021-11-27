const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class PhCommand extends BaseCommand {
  constructor() {
    super('ph', 'images', ['pornhub']);
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

        let member;
        if (args[0]) member = await message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args[0].toLowerCase()) || message.mentions.members.first();
        let text = args.join(' ');

        if (member) {
            text = args.slice(1).join(' ');
        } else {
            member = message.member;
        }

        if (!text) {
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
        let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${member.user.username}&image=${member.user.avatarURL({ format: 'png', size: 512 })}&text=${text}`));
        let json = await res.json();
        let attachment = new Discord.MessageAttachment(json.message, `ph-${message.member.user.username}.png`);

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