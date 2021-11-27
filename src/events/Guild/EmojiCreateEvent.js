const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class EmojiCreateEvent extends BaseEvent {
  constructor() {
    super('emojiCreate');
  }
  
  async run(client, emoji) {
    const Discord = require("discord.js");
    const db = require("quick.db");

    if (db.get(`${emoji.guild.id}_logs`) === "on") {
      const embed0 = new Discord.MessageEmbed()
      .setColor("WHITE")
      .setAuthor("Dodano Emotkę", `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`, `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`)
      .setDescription("```<:" + emoji.name + ":" + emoji.id + ">```")
      .setThumbnail(`https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`)
      .setFooter("[" + emoji.id + "]", emoji.guild.iconURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
      .setTimestamp();

      const kanal = db.get(`${emoji.guild.id}_logs_channel`);
      if (!kanal) return;
      try {
          return client.channels.cache.get(kanal).send(embed0);
      } catch (err) {
          return;
      }
    }
  }
};