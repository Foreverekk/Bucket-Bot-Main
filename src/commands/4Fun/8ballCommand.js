const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class Ball8Command extends BaseCommand {
  constructor() {
    super('8ball', '4fun', ['8bal', 'eightball', 'eightbal'], false);
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
        .setDescription(`${NO} Zadaj jakieś pytanie ${client.madge}`);
      
        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }
      if (message.content.length > 50) {
        const embed1 = new Discord.MessageEmbed()
        .setColor(client.cNeg)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(`${NO} Pytanie jest za długie o jakies **dużo** znaków ${client.madge}`);
      
        return message.channel.send({
          buttons: button0,
          embed: embed1
        });
      }
  
        let replies = [
          'Tak', 'Tak ' + client.madge, 'Tak', 'Nie', 'Nie ' + client.madge, 'Nie', 'Nie wiem', 'Nie mam pojęcia'
        ];
        let result = Math.floor(Math.random() * replies.length);
        let question = args.join(' ');
  
        const embed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.member.displayName, AV, db.get(`${message.author.id}_link1`) || AV)
        .addField('Pytanie:', question)
        .addField('Odpowiedź:', replies[result]);
  
        return message.channel.send(embed2);

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