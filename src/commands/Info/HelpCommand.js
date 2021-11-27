const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', ['h', 'pomoc']);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, client.cd);
    const Discord = require('discord.js');
    const db = require('quick.db');
    const i18n = require('i18n');
    i18n.setLocale('pl');
    const { MessageButton, MessageActionRow } = require('discord-buttons');

    try {
        const button0 = new MessageButton()
        .setStyle('red')
        .setID('delete0')
        .setLabel('OK');

        const Fun = '`8ball`, `Age`, `Choose`, `Cm`, `Color`, `Cow`, `Dick`, `Flip`, `IP`, `IQ`, `Ship`, `Token`';
        const Activity = '`Chu`';
        const Images = '`Anime`, `Captcha`, `Clyde`, `Cute`, `Invert`, `Love`, `OwO`, `Ph`, `Tweet`';
        const Info = '`Avatar`, `Help`';
        const Misc = ' ';
        const Moderator = '`Config`, `Purge`';
        const Music = ' ';
        const NSFW = ' ';
        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cInfo)
        .setTitle(i18n.__mf('help.embedTitle', { botname: client.user.username }))
        .setDescription(i18n.__('help.embedDescription') +
        '\n\n**4Fun**' +
        `\n ${Fun}` +
        '\n**Activity**' +
        `\n ${Activity}` +
        '\n **Images**' +
        `\n ${Images}` +
        '\n **Info**' +
        `\n ${Info}` +
        '\n **Misc**' +
        `\n ${Misc}` +
        '\n **Music**' +
        `\n ${Music}` +
        '\n **Moderator**' +
        `\n ${Moderator}` +
        '\n **NSFW**' +
        `\n ${NSFW}`)
    
        return message.channel.send({
            buttons: button0,
            embed: embed0
        });
    
    } catch (err) {
        embederr.setDescription('```' + err.message + '```');
    
        try {
          message.channel.send(embederr);
          embederr.setFooter(`gID: ${message.guild.id}, gN: ${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || client.av);
          if (db.get('bot_errors') === 'on') return client.channels.cache.get(db.get('bot_errors_channel')).send(embederr);
        } catch (err) {
          return;
        }
      }
      }
      }
      };