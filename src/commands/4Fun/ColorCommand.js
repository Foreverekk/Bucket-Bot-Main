const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class ColorCommand extends BaseCommand {
  constructor() {
    super('color', '4fun', ['randomcolor', 'rcolor', 'colors', 'kolor', 'kolory'], false);
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

    try {
      const kolor = (function co(lor) {
        return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][
          Math.floor(Math.random() * 16)
        ]) && lor.length == 6
          ? lor
          : co(lor);
      })('');
  
      const embed0 = new Discord.MessageEmbed()
      .setColor(kolor)
      .setAuthor('Hex:', AV, db.get(`${message.author.id}_link1`) || AV)
      .setTitle(`🌈 #${kolor}`);

      const button0 = new MessageButton()
      .setStyle('blurple')
      .setID('color0')
      .setLabel('NEXT');
  
      return message.channel.send({
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