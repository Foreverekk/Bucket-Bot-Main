const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class ChooseCommand extends BaseCommand {
  constructor() {
    super('choose', '4fun', ['chose', 'wybierz'], false);
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
    const NO = client.no;

    try {
      const button0 = new MessageButton()
      .setStyle('red')
      .setID('delete0')
      .setLabel('OK');

      if (!args[0]) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Nie podano pierwszego wyboru! ${client.sadge}`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }
    
      if (!args[1]) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Nie podano drugiego wyboru! ${client.madge}`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }

      if (args[10]) {
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Maksymalna ilość wyborów to **10** ${client.sadeg}`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }

      let replies;
      if (args[9]) {
        replies = [args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]];
      } else if (args[8]) {
        replies = [args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]];
      } else if (args[7]) {
        replies = [args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]];
      } else if (args[6]) {
        replies = [args[0], args[1], args[2], args[3], args[4], args[5], args[6]];
      } else if (args[5]) {
        replies = [args[0], args[1], args[2], args[3], args[4], args[5]];
      } else if (args[4]) {
        replies = [args[0], args[1], args[2], args[3], args[4]];
      } else if (args[3]) {
        replies = [args[0], args[1], args[2], args[3]];
      } else if (args[2]) {
        replies = [args[0], args[1], args[2]];
      } else {
        replies = [args[0], args[1]];
      }

      let result = Math.floor(Math.random() * replies.length);
      let repl = ['1', '1', '1', '1', '1', '2', '2'];
      let r = Math.floor(Math.random() * repl.length);
      let res = Math.floor(Math.random() * replies.length);
      const wybr = replies[result];
      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(`Wybieram ${replies[result]}`, AV, `https://www.google.com/search?q=${replies[result]}`);
      
      const msg = await message.lineReplyNoMention(embed0);

      if (repl[r] === '2') {
        let w;
        w = wybr;
        if (wybr.length > 5) w = wybr.slice(0, 3);
        if (wybr.length > 10) w = wybr.slice(0, 7);
        if (wybr.length > 15) w = wybr.slice(0, 10);
        if (wybr.length > 20) w = wybr.slice(0, 15);
        const embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Wybieram ${w}.., tzn ${replies[res]}*`, AV, `https://www.google.com/search?q=${replies[res]}`);

        setInterval(function() {
          return msg.edit(embed1)
        }, 3000);
      } else return;

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