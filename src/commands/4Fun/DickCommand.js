const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class DickCommand extends BaseCommand {
  constructor() {
    super('dick', '4fun', ['dik', 'penis'], false);
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
      const liczba = getRandomIntInclusive(1, 29);
      let dick = '==============================';
      let d = dick.slice(0, liczba);
      let e = '';
      if (liczba > 22) {
        e = client.poggers + ' ' + client.poggers;
      } else if (liczba < 8) e = client.porvalo;

      let replies0 = ['dick', 'dick', 'dick', 'big dick'];
      let result0 = Math.floor(Math.random() * replies0.length);

      const embed0 = new Discord.MessageEmbed()
      .setColor(member.displayHexColor)
      .setAuthor(`${member.displayName}'s ${replies0[result0]}`, member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }), db.get(`${member.id}_link1`))
      .setTitle(`8${d}D ${e}`);

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