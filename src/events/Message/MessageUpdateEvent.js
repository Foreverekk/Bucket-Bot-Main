const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class MessageUpdateEvent extends BaseEvent {
  constructor() {
    super('messageUpdate');
  }
  
  async run(client, oldMessage, newMessage) {
    if (oldMessage.channel.type === 'dm') return;
    if (oldMessage.author.bot) return;
    const Discord = require('discord.js');
    const db = require('quick.db');
    const guild = oldMessage.guild;

    if (db.get(`${guild.id}_logs`) === 'on') {
      if (oldMessage.content != newMessage.content) {
        const embed0 = new Discord.MessageEmbed()
        .setColor('ORANGE')
        .setAuthor('Edytowano Wiadomość')
        .addField('Na Kanale', `<#${newMessage.channel.id}> [#${newMessage.channel.name}] [[Jump]](${newMessage.url})`)
        .addField('Użytkownika', `<@${newMessage.author.id}> [${newMessage.member.user.tag}]`)
        .setDescription('**Przed:**```' + oldMessage.content + '```\n**Po:**```' + newMessage.content + '```')
        .setFooter(`[@${newMessage.author.id}] [${newMessage.id}]`, newMessage.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }) || client.av)
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
}
};