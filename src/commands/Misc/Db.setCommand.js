const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DbsetCommand extends BaseCommand {
  constructor() {
    super('db.set', 'other', []);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    const Discord = require("discord.js");
    const db = require("quick.db");

    try {
      if (message.member.id !== "607937967130017807") return message.react(client.no);

      const argss = message.content
      .slice(PREFIX.length)
      .slice(CMD.length)
      .slice(args[0].length)
      .slice(2);
    
      if (args[2] === "number") {
        db.set(args[0], Number(args[1]));
      } else {
        db.set(args[0], argss);
      }
      return message.channel.send("Ustawiono `" + args[0] + "` na **`" + argss + "`**");

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
    };