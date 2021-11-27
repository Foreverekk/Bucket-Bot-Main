const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DbgetCommand extends BaseCommand {
  constructor() {
    super('db.get', 'other', []);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    const Discord = require("discord.js");
    const db = require("quick.db");

    try {
      if (message.member.id !== "607937967130017807") return message.react(client.no);
      if (db.get(args[0]) === null) return message.channel.send("`" + args[0] + "` nie zostało ustawione (Null)");
      if (db.get(args[0]) === undefined) return message.channel.send("`" + args[0] + "` nie zostało ustawione (Undefined)");
      return message.channel.send("```" + db.get(args[0]) + "```");

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