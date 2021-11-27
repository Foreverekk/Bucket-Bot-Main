const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class KermitCommand extends BaseCommand {
  constructor() {
    super('kermit', '4fun', [], false);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
      } else {
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, (db.get(`${message.guild}_premium`) === 'on') ? client.cd - client.pcd : client.cd);

    try {
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage('https://images-ext-1.discordapp.net/external/zqOS2RB-nbarCCVz41W_jPwbIPABTiW3Zgm9MPzxVhc/https/cdn.ram.moe/S1HbFmzVe.gif');
    
      return message.lineReplyNoMention(embed0);
    
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