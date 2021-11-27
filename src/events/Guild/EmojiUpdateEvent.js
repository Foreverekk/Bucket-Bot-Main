const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class EmojiUpdateEvent extends BaseEvent {
  constructor() {
    super('emojiUpdate');
  }
  
  async run(client, oldEmoji, newEmoji) {
    const Discord = require("discord.js");
    const db = require("quick.db");

    if (db.get(`${oldEmoji.guild.id}_logs`) === "on") {
      const embed0 = new Discord.MessageEmbed()
      .setColor("WHITE")
      .setAuthor("Edytowano Emotkę", `https://cdn.discordapp.com/emojis/${oldEmoji.id}.${oldEmoji.animated ? "gif" : "png"}`, `https://cdn.discordapp.com/emojis/${oldEmoji.id}.${oldEmoji.animated ? "gif" : "png"}`)
      .setDescription("**Przed**```<:" + oldEmoji.name + ":" + oldEmoji.id + ">```\n**Po**```<:" + newEmoji.name + ":" + newEmoji.id + ">```")
      .setThumbnail(`https://cdn.discordapp.com/emojis/${oldEmoji.id}.${oldEmoji.animated ? "gif" : "png"}`)
      .setFooter("[" + oldEmoji.id + "]", oldEmoji.guild.iconURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
      .setTimestamp();

      const kanal = db.get(`${oldEmoji.guild.id}_logs_channel`);
      if (!kanal) return;
      try {
          return client.channels.cache.get(kanal).send(embed0);
      } catch (err) {
          return;
      }
    }
  }
};