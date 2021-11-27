const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class AnimeCommand extends BaseCommand {
  constructor() {
    super('anime', 'images', [], false);
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
    const snekfetch = require('snekfetch');
    const { MessageButton, MessageActionRow } = require('discord-buttons');

    try {
      const { body } = await snekfetch.get('https://nekos.life/api/v2/img/avatar');
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage(body.url);

      const button0 = new MessageButton()
      .setStyle('blurple')
      .setID('anime0')
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