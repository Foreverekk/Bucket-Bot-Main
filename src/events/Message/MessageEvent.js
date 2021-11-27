const BaseEvent = require('../../utils/structures/BaseEvent');
const talkedRecently0 = new Set();
const talkedRecently1 = new Set();
const talkedRecently2 = new Set();
const talkedRecently3 = new Set();
const talkedRecently4 = new Set();
const talkedRecently5 = new Set();
const talkedRecently6 = new Set();
const talkedRecently7 = new Set();

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageButton, MessageActionRow } = require('discord-buttons');
    const YES = client.yes;
    const NO = client.no;

    const PREFIX = db.get(`${message.guild.id}_prefix`) || client.prefix || '/';
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const [cmdName, ...cmdArgs] = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = client.commands.get(cmdName);

    if (command) {
      if (talkedRecently7.has(message.guild.id)) {
        return;
      } else {
      talkedRecently7.add(message.guild.id);
      setTimeout(() => {
        talkedRecently7.delete(message.guild.id);
      }, 600);

      const AV = message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av;
      const embederr = new Discord.MessageEmbed()
      .setColor(client.cBlad)
      .setTitle('Błąd')
      .addField('Komenda:', '```' + command.name + '```', true)
      .addField('Użytkownik:', '```' + message.member.user.tag + '```', true)
      .setFooter(`gID: ${message.guild.id}, gN: ${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || client.av)
      .setTimestamp();

      if (command.premium === true) {
        const button0 = new MessageButton()
        .setStyle('red')
        .setID('delete0')
        .setLabel('OK');
  
        if (db.get(`${message.guild.id}_premium`).toLowerCase() !== 'on') {
          const embed0 = new Discord.MessageEmbed()
          .setColor(client.cNeg)
          .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
          .setDescription(NO + ' Komenda `' + command.name + '` jest dostępna tylko dla serwerów **PREMIUM**');
  
          return message.channel.send({
            buttons: button0,
            embed: embed0
          });
        }
      }

      const CMD = command.name;
      command.run(client, message, cmdArgs, AV, CMD, PREFIX, embederr);
};

  } else if (message.content.includes(client.user.id)) {
    if (talkedRecently7.has(message.guild.id)) {
      return;
    } else {
    talkedRecently7.add(message.guild.id);
    setTimeout(() => {
      talkedRecently7.delete(message.guild.id);
    }, 1000);
    let emotki = [
      '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💖', '💗', '💓'
    ];
    let emotka = Math.floor(Math.random() * emotki.length);
    message.react(emotki[emotka]);
  }
};
  }
};