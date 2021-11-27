const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super('guildDelete');
  }
  
  async run(client, guild) {
    const Discord = require('discord.js');
    const db = require('quick.db');

    db.delete(`${guild.id}_autocheck`);
    db.delete(`${guild.id}_autorole`);
    db.delete(`${guild.id}_clever-bot`);
    db.delete(`${guild.id}_commands`);
    db.delete(`${guild.id}_fun-replies`);
    db.delete(`${guild.id}_logs`);
    db.delete(`${guild.id}_nsfw`);
    db.delete(`${guild.id}_level`);
    db.delete(`${guild.id}_prefix`);

    const embed0 = new Discord.MessageEmbed()
    .setColor(client.cNeg)
    .setAuthor(`[${guild.id}]`, guild.iconURL({ format: 'png', dynamic: true }) || client.av, guild.iconURL({ format: 'png', dynamic: true }) || client.av)
    .setTitle(`[**${client.guilds.cache.size}**] -${guild.name} (${guild.memberCount})`)
    .setThumbnail(guild.iconURL({ format: 'png', dynamic: true }) || client.av)
    .setFooter(`${guild.owner.user.tag} [${guild.owner.id}]`, guild.owner.user.avatarURL({ format: 'png', dynamic: true }) || client.av)
    .setTimestamp();

    try {
      return client.channels.cache.get(db.get('bot_guilds_channel')).send(embed0);
    } catch (err) {
      return;
    }
  }
};