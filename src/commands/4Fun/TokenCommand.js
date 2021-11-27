const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class TokenCommand extends BaseCommand {
  constructor() {
    super('token', '4fun', ['randombot', 'rbot', 'rtoken', 'randomtoken'], true);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
      } else {
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, (db.get(`${message.guild}_premium`) === 'on') ? client.cd - client.pcd : client.cd);
    const { MessageButton, MessageActionRow } = require('discord-buttons');
    const snekfetch = require('snekfetch');

    try {
      const member = message.member;
      const { body } = await snekfetch.get('https://some-random-api.ml/bottoken');
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor('Token Generator', member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av, db.get(`${member.user.id}_link1`) || member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av)
      .setDescription('```' + body.token + '```');
  
      const button0 = new MessageButton()
      .setStyle('blurple')
      .setID('token0')
      .setLabel('NEXT');
    
      return message.channel.send({
        content: `<@${message.author.id}>`,
        buttons: button0,
        embed: embed0
      });
  
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