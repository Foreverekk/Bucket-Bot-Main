const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    if (member.id === '626383574622404610') {
      try {
      member.kick('Blacklista.');
      } catch (err) {
        return;
      }
    }
    const Discord = require('discord.js');
    const db = require('quick.db');
    const guild = member.guild;
    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? ' dzień' : ' dni') + ' temu';
    }

    try {
      if (db.get(`${guild.id}_autocheck`) === 'on') {
        const time = db.get(`${guild.id}_autocheck_time`) || 'off';
        const punishment = db.get(`${guild.id}_autocheck_punishment`) || 'off';
      if (time === '0') {
    try {
      member.send('**AUTOCHECK** - Zablokowano serwer dla nowych osób. Kara: **' + punishment + '**. Serwer: **' + guild.name + '** (`' + guild.owner.user.tag + '`).');
      if (punishment === 'kick') {
        member.kick('AUTOCHECK - Zablokowano serwer dla nowych osób');
      } else if (punishment === 'ban') {
        member.ban({ reason: 'AUTOCHECK - Zablokowano serwer dla nowych osób' });
      } else if (punishment === 'off')
        return;
    } catch (err) {
      return;
    }
  }
      if (time === '1') {
      if (checkDays(member.user.createdAt) == "0 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 1 dnia. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 1 dnia");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 1 dnia" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      if (time === "2") {
      if (checkDays(member.user.createdAt) == "1 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 2 dni. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 2 dni");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 2 dni" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      if (time === "3") {
      if (checkDays(member.user.createdAt) == "2 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 3 dni. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 3 dni");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 3 dni" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      if (time === "4") {
      if (checkDays(member.user.createdAt) == "3 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 4 dni. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 4 dni");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 4 dni" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      if (time === "5") {
      if (checkDays(member.user.createdAt) == "4 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 5 dni. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 5 dni");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 5 dni" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      if (time === "6") {
      if (checkDays(member.user.createdAt) == "5 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 6 dni. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 6 dni");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 6 dni" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      if (time === "7") {
      if (checkDays(member.user.createdAt) == "6 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 7 dni. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 7 dni");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 7 dni" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      if (time === "8") {
      if (checkDays(member.user.createdAt) == "7 dni temu") {
    try {
      member.send("**AUTOCHECK** - Konto poniżej 8 dni. Kara: **" + punishment + "**. Serwer: **" + guild.name + "** (`" + guild.owner.user.tag + "`).");
      if (punishment === "kick") {
        member.kick("AUTOCHECK - Konto poniżej 8 dni");
      } else if (punishment === "ban") {
        member.ban({ reason: "AUTOCHECK - Konto poniżej 8 dni" });
      } else if (punishment === "off")
        return;
    } catch (err) {
      return;
    }
  }
}
      };

  const embed0 = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor("Dołączył", "https://media.discordapp.net/attachments/839208821778939954/841602363823620106/sketch-1620723922304.png?width=676&height=676", member.user.avatarURL({ format: 'png', dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
  .addField("Użytkownik:", "<@" + member.user.id + "> [" + member.user.tag + "]")
  .addField("Konto Utworzone:", "**" + checkDays(member.user.createdAt) + "** (" + member.user.createdAt.toUTCString().substr(0, 16) + ")")
  .setThumbnail(member.user.avatarURL({ format: "png", dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
  .setFooter("[" + member.user.id + "]", member.user.avatarURL({ format: "png", dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png")
  .setTimestamp();

if (db.get(`${guild.id}_autorole`) === "on") {
  embed0.setFooter("✔ Autorole [@" + member.user.id + "]", member.user.avatarURL({ format: "png", dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png");
let role0id = db.get(`${guild.id}_autorole_role0`);
var role0 = member.guild.roles.cache.get(role0id);
if (role0) member.roles.add(rola0, "Auto Role");


let role1id = db.get(`${guild.id}_autorole_role1`);
var role1 = member.guild.roles.cache.get(role1id);
if (role1) member.roles.add(rola1, "Auto Role");

let role2id = db.get(`${guild.id}_autorole_role2`);
var role2 = member.guild.roles.cache.get(role2id);
if (role2) member.roles.add(rola2, "Auto Role");

let role3id = db.get(`${guild.id}_autorole_role3`);
var role3 = member.guild.roles.cache.get(role3id);
if (role3) member.roles.add(rola3, "Auto Role");

let role4id = db.get(`${guild.id}_autorole_role4`);
var role4 = member.guild.roles.cache.get(role4id);
if (role4) member.roles.add(rola4, "Auto Role");

let role5id = db.get(`${guild.id}_autorole_role5`);
var role5 = member.guild.roles.cache.get(role5id);
if (role5) member.roles.add(rola5, "Auto Role");

if (db.get(guild.id + "_logs") === "on") {
  const kanal = db.get(`${guild.id}_logs_channel`);
  if (!kanal) return;
  client.channels.cache.get(kanal).send(embed0);
}
} else {
  embed0.setFooter("✘ Autorole [@" + member.user.id + "]", member.user.avatarURL({ format: "png", dynamic: true }) || "https://cdn.discordapp.com/embed/avatars/0.png");
  if (db.get(guild.id + "_logs") === "on") {
    const kanal = db.get(`${guild.id}_logs_channel`);
    if (!kanal) return;
    client.channels.cache.get(kanal).send(embed0);
  }
}
} catch (err) {
const kanal = db.get(`${guild.id}_logs_channel`);
if (!kanal) return;
try {
  return client.channels.cache.get(kanal).send("```" + err.message + "```");
} catch (err) {
  return;
}
}
}
};