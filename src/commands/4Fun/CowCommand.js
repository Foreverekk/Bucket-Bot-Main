const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class CowCommand extends BaseCommand {
  constructor() {
    super('cow', '4fun', ['krowa', 'cows'], false);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
      } else {
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, (db.get(`${message.guild}_premium`) === 'on') ? client.cd - client.pcd : client.cd);
    const cows = require('cows');
    const rn = require('random-number');

    try {
      const options = {
        min: 0,
        max: cows().length - 1,
        integer: true
    };
    const random = rn(options);
    return message.lineReplyNoMention(cows()[random], { code: '' });

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