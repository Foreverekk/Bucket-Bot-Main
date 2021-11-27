const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class CaptchaCommand extends BaseCommand {
  constructor() {
    super('captcha', 'images', ['cap'], false);
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
    const fetch = require('node-fetch');

    try {
        message.channel.startTyping();
        const member = message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args.join(' ').toLowerCase()) || message.mentions.members.first() || message.member;
        let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${member.user.username}&url=${member.user.avatarURL({ format: 'png', size: 512 })}`));
        let json = await res.json();
        let attachment = new Discord.MessageAttachment(json.message, `captcha-${message.member.user.username}.png`);

        message.channel.stopTyping();
        return message.lineReplyNoMention(attachment);
  
      } catch (err) {
        embederr.setDescription('```' + err.message + '```');
    
        try {
          if (db.get(client.bot_error).toLowerCase() === 'on') client.channels.cache.get(db.get(client.bot_error_channel)).send(embederr);
          embederr.setFooter(client.errfooter);
          return message.channel.send(embederr);
        } catch (err) {
          return;
        }
      }
      }
      }
      };