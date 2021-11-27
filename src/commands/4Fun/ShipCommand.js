const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class ShipCommand extends BaseCommand {
  constructor() {
    super('ship', '4fun', [], false);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
      } else {
      talkedRecently.add(message.author.id);
      setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, (db.get(`${message.guild}_premium`) === 'on') ? client.cd - client.pcd : client.cd);

    try {
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
      let member1;
      let member2;
    
      if (!args[0]) {
        member1 = message.member.displayName;
        member2 = message.guild.members.cache.random().displayName;
        return message.channel.send({
          content: "**" + member1 + "** + **" + member2 + "** = **" + getRandomIntInclusive(1, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞"
        });
      } else {
        if (message.content.includes("651165167811428363")) {
          if (message.content.includes("429280222496686081")) {
              return message.channel.send("**" + args[0] + "** + **" + args[1] + "** = **" + getRandomIntInclusive(98, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞");
          }
        }
      if (message.content.includes("576401935691677711")) {
        if (message.content.toLowerCase().includes("ban")) {
          return message.channel.send("**" + args[0] + "** + **" + args[1] + "** = **" + getRandomIntInclusive(98, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞");
        }
      }
      if (message.content.includes("409030450045124619")) {
        if (message.content.includes("653719234463006801")) {
          return message.channel.send("**" + args[0] + "** + **" + args[1] + "** = **" + getRandomIntInclusive(98, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞");
        }
      }
      if (message.content.includes("653719234463006801")) {
        if (message.content.toLowerCase().includes("ban")) {
          return message.channel.send("**" + args[0] + "** + **" + args[1] + "** = **" + getRandomIntInclusive(98, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞");
        }
      }
      if (message.content.includes("566612197783109642")) {
        if (message.content.includes("576401935691677711")) {
          return message.channel.send("**" + args[0] + "** + **" + args[1] + "** = **" + getRandomIntInclusive(90, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞");
        }
      }
      if (!args[1]) {
        return message.channel.send("**" + message.member.displayName + "** + **" + args[0] + "** = **" + getRandomIntInclusive(1, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞");
      }

      return message.channel.send("**" + args[0] + "** + **" + args[1] + "** = **" + getRandomIntInclusive(1, 100) + "." + getRandomIntInclusive(1, 99) + "%** 💞");
      }

    } catch (err) {
      embederr.setDescription('```' + err.message + '```');
  
      try {
        if (db.get(client.bot_error).toLowerCase() === 'on') client.channels.cache.get(db.get(client.bot_error_channel)).send(embederr);
        embederr.setFooter(client.errfooter);
        return message.channel.send(embederr);
      } catch (err) {
        return;
      }
    }
    }
    }
    };