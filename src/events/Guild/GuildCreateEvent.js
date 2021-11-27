const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }
  
  async run(client, guild) {
    const Discord = require('discord.js');
    const db = require('quick.db');

    if (db.get(`${guild.id}_autocheck`) != 'off') db.set(`${guild.id}_autocheck`, 'off');
    if (db.get(`${guild.id}_autorole`) != 'off') db.set(`${guild.id}_autorole`, 'off');
    if (db.get(`${guild.id}_clever-bot`) != 'off') db.set(`${guild.id}_clever-bot`, 'off');
    if (db.get(`${guild.id}_commands`) != 'off') db.set(`${guild.id}_commands`, 'off');
    if (db.get(`${guild.id}_fun-replies`) != 'off') db.set(`${guild.id}_fun-replies`, 'off');
    if (db.get(`${guild.id}_logs`) != 'off') db.set(`${guild.id}_logs`, 'off');
    if (db.get(`${guild.id}_nsfw`) != 'on') db.set(`${guild.id}_nsfw`, 'on');
    if (db.get(`${guild.id}_level`) != 'off') db.set(`${guild.id}_level`, 'off');
    if (db.get(`${guild.id}_prefix`) != client.prefix) db.set(`${guild.id}_prefix`, client.prefix);

    const embed0 = new Discord.MessageEmbed()
    .setColor(client.cPoz)
    .setAuthor(`[${guild.id}]`, guild.iconURL({ format: 'png', dynamic: true }) || client.av, guild.iconURL({ format: 'png', dynamic: true }) || client.av)
    .setTitle(`[**${client.guilds.cache.size}**] +${guild.name} (${guild.memberCount})`)
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