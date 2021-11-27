const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('messageDelete');
  }
  
  async run(client, message) {
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;
    const Discord = require('discord.js');
    const db = require('quick.db');
    const guild = message.guild;

    if (db.get(`${guild.id}_logs`) === 'on') {
      const embed0 = new Discord.MessageEmbed()
      .setColor(client.cNeg)
      .setAuthor('Usunięto Wiadomość', 'https://media.discordapp.net/attachments/839208821778939954/839254231629168680/sketch-1620164167049.png?width=510&height=510', message.url)
      .addField('Z Kanału', `<#${message.channel.id}> [#${message.channel.name}]`)
      .addField('Użytkownika', `<@${message.author.id}> [${message.member.user.tag}]`)
      .setDescription('```' + message.content + '```')
      .setFooter(`[@${message.author.id}] [${message.id}]`, message.author.avatarURL({ format: 'png', dynamic: true }) || client.av)
      .setTimestamp();

      const kanal = db.get(`${guild.id}_logs_channel`);
      if (!kanal) return;
      try {
        return client.channels.cache.get(kanal).send(embed0);
    } catch (err) {
        return;
    }
  }
}
};