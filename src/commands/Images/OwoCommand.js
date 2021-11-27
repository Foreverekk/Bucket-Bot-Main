const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class OwoCommand extends BaseCommand {
  constructor() {
    super('owo', 'images', []);
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
    const axios = require('axios');
    const { MessageButton, MessageActionRow } = require('discord-buttons');

    try {
      var cmd = 'owo';
      var res = await axios.get('https://rra.ram.moe/i/r', {params: {'type': cmd}});
      var path = res.data.path.replace('/i/', '');
  
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage('https://cdn.ram.moe/' + path);

      const button0 = new MessageButton()
      .setStyle('blurple')
      .setID('owo0')
      .setLabel('NEXT');
    
      return message.channel.send({
        content: `<@${message.author.id}>`,
        buttons: button0,
        embed: embed0
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