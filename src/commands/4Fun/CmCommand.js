const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class CmCommand extends BaseCommand {
  constructor() {
    super('cm', '4fun', [], false);
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
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const member = message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args.join(' ').toLowerCase()) || message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args.join(' ').toLowerCase()) || message.mentions.members.first() || message.member;
      const liczba = getRandomIntInclusive(1, 34);
      let m;
      if (member.id === message.author.id) {
        m = 'sz';
      } else {
        m = '';
      }

      return message.channel.send(`**${member.displayName}** posiada${m} siura wielkości **${liczba}cm**`);

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