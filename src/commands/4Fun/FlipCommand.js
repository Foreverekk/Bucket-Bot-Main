const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class FlipCommand extends BaseCommand {
  constructor() {
    super('flip', '4fun', [], true);
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
    const mapping = "¡\"#$%⅋,)(*+'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~";
    const OFFSET = "!".charCodeAt(0);
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
        .setDescription(`${NO} Dopisz coś fajnego`);

        return message.channel.send({
          buttons: button0,
          embed: embed0
        });
      }
    
      return message.lineReplyNoMention(
        args
        .join(' ')
        .split('')
        .map(c => c.charCodeAt(0) - OFFSET)
        .map(c => mapping[c] || ' ')
        .reverse()
        .join('')
      );
    
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