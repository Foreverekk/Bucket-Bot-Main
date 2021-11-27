const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class AgeCommand extends BaseCommand {
  constructor() {
    super('age', '4fun', ['ile', 'wiek'], false);
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
      const wiek = '' + getRandomIntInclusive(1, 81);
      let m;
      if (member.id === message.author.id) {
        m = 'sz';
      } else {
        m = '';
      }
      let c;
      if (wiek.endsWith('2', 2)) {
        if (wiek.startsWith('1')) {
          c = '';
        } else {
          c = 'a';
        }
      } else if (wiek.endsWith('1', 2)) {
        c = '';
      } else if (wiek.endsWith('3', 2)) {
        if (wiek.startsWith('1')) {
          c = '';
        } else {
          c = 'a';
        }
      } else if (wiek.endsWith('4', 2)) {
        if (wiek.startsWith('1')) {
          c = '';
        } else {
          c = 'a';
        }
      } else if (wiek.endsWith('5', 2)) {
        c = '';
      } else if (wiek.endsWith('6', 2)) {
        c = '';
      } else if (wiek.endsWith('7', 2)) {
        c = '';
      } else if (wiek.endsWith('8', 2)) {
        c = '';
      } else if (wiek.endsWith('9', 2)) {
        c = '';
      } else if (wiek.endsWith('0', 2)) {
        c = '';
      } else {
        c = '';
      }

      if (wiek > 70) {
        return message.channel.send(`**${member.displayName}** przeżyje${m} jeszcze **${wiek}** lat${c} ${client.poggers} ${client.poggers}`);
      } else if (wiek === 1) {
        return message.channel.send(`**${member.displayName}** przeżyje${m} jeszcze **rok** ${client.porvalo}`);
      } else if (wiek > 55) {
        return message.channel.send(`**${member.displayName}** przeżyje${m} jeszcze **${wiek}** lat${c}, ale koks ${client.ez} ${client.clap}`);
      } else if (wiek < 20) {
        return message.channel.send(`**${member.displayName}** przeżyje${m} jeszcze **${wiek}** lat${c} ${client.porvalo}`);
      } else {
        return message.channel.send(`**${member.displayName}** przeżyje${m} jeszcze **${wiek}** lat${c}`);
      }

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