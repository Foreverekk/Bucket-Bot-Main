const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GetinviteCommand extends BaseCommand {
  constructor() {
    super('getinvite', 'other', ['getinv']);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageButton, MessageActionRow } = require('discord-buttons');
    const NO = client.no;
    const YES = client.yes;

    try {
        const button0 = new MessageButton()
        .setStyle('red')
        .setID('delete0')
        .setLabel('OK');

        if (message.author.id !== '607937967130017807' && message.author.id !== '444177942902472704') {
            const embed0 = new Discord.MessageEmbed()
            .setColor(client.cNeg)
            .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
            .setDescription(`${NO} Nie posiadasz wymaganych uprawnień! ${client.sadeg}`);
    
            return message.channel.send({
              buttons: button0,
              embed: embed0
            });
          }

        if (!args[0]) {
          const embed0 = new Discord.MessageEmbed()
          .setColor(client.cNeg)
          .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
          .setDescription(`${NO} Wyszukiwanie serwerów po: **Name**, **ID**`);
  
          return message.channel.send({
            buttons: button0,
            embed: embed0
          });
        }

        const guild = client.guilds.cache.get(args.join(' ')) || client.guilds.cache.find(g => g.name.toLowerCase() === args.join(' ').toLowerCase());

        if (!guild) {
          const embed0 = new Discord.MessageEmbed()
          .setColor(client.cNeg)
          .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
          .setDescription(`${NO} Nie znalazłem takiego serwera lub na nim nie jestem ${client.sadeg}`);
  
          return message.channel.send({
            buttons: button0,
            embed: embed0
          });
        }

        const channel = guild.channels.cache.find(ch => ch.type == 'text' && ch.permissionsFor(ch.guild.me).has('CREATE_INSTANT_INVITE'));

        if (!channel) {
          const embed0 = new Discord.MessageEmbed()
          .setColor(client.cNeg)
          .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
          .setDescription(`${NO} Nie mogłem zrobić zaproszenia ${client.madge}`);
  
          return message.channel.send({
            buttons: button0,
            embed: embed0
          });
        }

        const invite = await channel.createInvite({ temporary: false, maxAge: 0 });
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cPoz)
        .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
        .setDescription(YES + ' Utworzono zaproszenie na serwer `' + guild.name + '`!\n' + client.poggers + ' **' + invite.url + '**');

        return message.lineReplyNoMention(embed0);

    } catch (err) {
        embederr.setDescription('```' + err.message + '```');
    
        try {
          message.channel.send(embederr);
          embederr.setFooter(`gID: ${message.guild.id}, gN: ${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || client.av);
          if (db.get(client.bot_error) === 'on') return client.channels.cache.get(db.get('bot_errors_channel')).send(embederr);
        } catch (err) {
          return;
        }
      }
      }
      };