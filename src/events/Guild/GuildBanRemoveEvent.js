const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class GuildBanAddEvent extends BaseEvent {
  constructor() {
    super('guildBanRemove');
  }
  
  async run(client, guild, user) {
    const Discord = require("discord.js");
    const db = require("quick.db");
    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " dzień" : " dni") + " temu";
    }

    if (db.get(`${guild.id}_logs`) === "on") {
      const embed0 = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor("UNBAN")
      .addField("Użytkownik:", "<@" + user.id + "> [" + user.tag + "]")
      .addField("Konto Utworzone:", "**" + checkDays(user.createdAt) + "** (" + user.createdAt.toUTCString().substr(0, 16) + ")")
      .setThumbnail(user.avatarURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
      .setFooter("[@" + user.id + "]", user.avatarURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
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