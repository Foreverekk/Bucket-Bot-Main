const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, member) {
    const Discord = require("discord.js");
    const db = require("quick.db");
    const guild = member.guild;

    if (db.get(`${guild.id}_logs`) === "on") {
      const embed0 = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setAuthor("Opuścił nas", "https://media.discordapp.net/attachments/839208821778939954/841602363625046036/sketch-1620724025348.png?width=676&height=676", member.user.avatarURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
      .addField("Użytkownik:", "<@" + member.user.id + "> [" + member.user.tag + "]")
      .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
      .setFooter("[@" + member.user.id + "]", member.user.avatarURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
      .setTimestamp();

      const kanal = db.get(`${guild.id}_logs_channel`);
      if (!kanal) return;
      if (!member.user.lastMessage) return client.channels.cache.get(kanal).send(embed0);
      embed0.setDescription("**[[Jump]](" + member.user.lastMessage.url + ")**\n```" + member.user.lastMessage.content + "```");
      try {
        return client.channels.cache.get(kanal).send(embed0);
    } catch (err) {
        return;
    }
  }
}
};