const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class PepeCommand extends BaseCommand {
  constructor() {
    super('pepe', 'images', []);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, client.cd);
    const Discord = require('discord.js');
    const db = require('quick.db');

    try {
      let pepes = [
        'https://cdn.discordapp.com/emojis/428556352915505165.png?v=1',
        'https://cdn.discordapp.com/emojis/428556326482739230.png?v=1',
        'https://cdn.discordapp.com/emojis/428556486235389973.png?v=1',
        'https://cdn.discordapp.com/emojis/428556308929576960.png?v=1',
        'https://cdn.discordapp.com/emojis/428556295218659329.png?v=1',
        'https://cdn.discordapp.com/emojis/428556467021545473.png?v=1',
        'https://cdn.discordapp.com/emojis/428556448507625474.png?v=1',
        'https://cdn.discordapp.com/emojis/428556377754042378.png?v=1',
        'https://cdn.discordapp.com/emojis/428556281767526405.png?v=1',
        'https://cdn.discordapp.com/emojis/428556266366042112.png?v=1',
        'https://media.discordapp.net/attachments/635217812285161482/714087891772506122/tenor_3.gif',
        'https://media.discordapp.net/attachments/635217812285161482/714086398516265052/d9597e0056858188affa881f5c337c9b.jpg',
        'https://media.discordapp.net/attachments/635217812285161482/714087255450320936/6458_pepecri.gif',
        'https://media.discordapp.net/attachments/635217812285161482/714088713197715516/c4277d9d382493ff8c55e975d438ed1c.gif',
        'https://images-ext-1.discordapp.net/external/bvtjL5jF_eeFbS7i8yIp4WEP3-tFZ7-30xkKvW4OXpo/https/media.tenor.com/images/69983541b409be168812dfd95be4bbf2/tenor.gif',
        'https://media.discordapp.net/attachments/635217812285161482/714088728632623164/7hY7.gif',
        'https://media.discordapp.net/attachments/635217812285161482/714086634248732692/img.webp?width=560&height=560',
        'https://media.discordapp.net/attachments/635217812285161482/714086887643545610/DankMemesTriggerd.gif',
        'https://media.discordapp.net/attachments/635217812285161482/714088741307940894/1ABY.gif',
        'https://media.discordapp.net/attachments/635217812285161482/714086788704239636/1210368.jpg'//20
      ];
      let dapepe = Math.floor(Math.random() * pepes.length);

      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setImage(pepes[dapepe]);
    
      return message.channel.send({
        content: `<@${message.author.id}>`,
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