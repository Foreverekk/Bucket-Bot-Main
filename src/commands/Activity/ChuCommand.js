const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class ChuCommand extends BaseCommand {
  constructor() {
    super('chu', 'activity', [], false);
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
    const axios = require('axios');

    try {
      var cmd = 'chu';
      var res = await axios.get('https://rra.ram.moe/i/r', {params: {'type': cmd}});
      var path = res.data.path.replace('/i/', '');
  
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage('https://cdn.ram.moe/' + path);

      const button0 = new MessageButton()
      .setStyle('blurple')
      .setID('chu0')
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