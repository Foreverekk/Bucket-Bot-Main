const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class ConfigCommand extends BaseCommand {
  constructor() {
    super('config', 'moderator', ['conf', 'ustaw']);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 2000);
    const Discord = require('discord.js');
    const db = require('quick.db');

    try {
        const guild = message.guild;
        const member = message.member;
        const NO = client.no;
        const YES = client.yes;
        let offon;
        let offonk;
        let role0;
        let role1;
        let role2;
        let role3;
        let role4;


        ///////////////////////////////
          if (!member.hasPermission("ADMINISTRATOR")) {
              const embed0 = new Discord.MessageEmbed()
              .setColor("#cc0000")
              .setAuthor(member.user.tag, AV, db.get(member.user.id + "_link1") || AV)
              .setDescription(NO + " Nie posiadasz wymaganych uprawnień.")
              
              return message.channel.send(embed0);
          }
    
          const embed0 = new Discord.MessageEmbed()
          .setColor("ORANGE")
          .setTitle("1. Definicje");

        if (args[0] == "1" || args[0] == "help") {
            let c;
            let l;
            let ll;
                  if (db.get(`${guild.id}_clever-bot_channel`) == null) {
                      c = "";
                  } else {
                      c = "<#" + db.get(`${guild.id}_clever-bot_channel`) + "> ";
                  }
                  if (db.get(`${guild.id}_level_channel`) == null) {
                      l = "";
                  } else {
                      l = "<#" + db.get(`${guild.id}_level_channel`) + "> ";
                  }
                  if (db.get(`${guild.id}_logs_channel`) == null) {
                      ll = "";
                  } else {
                      ll = "<#" + db.get(`${guild.id}_logs_channel`) + "> ";
                  }
            if (db.get(`${guild.id}_autocheck`) !== "on") {
                embed0.addField(NO + " **AutoCheck**", "Sprawdzanie osób przy dołączaniu/zamknięcie serwera (ban/kick) `[Premium]`");
            } else {
                embed0.addField(YES + " **AutoCheck**", "Sprawdzanie osób przy dołączaniu/zamknięcie serwera (ban/kick) `[Premium]`");
            }
            if (db.get(`${guild.id}_autorole`) !== "on") {
                embed0.addField(NO + " **AutoRole**", "Rangi nadawane przez Bota po dołączeniu na serwer");
            } else {
                embed0.addField(YES + " **AutoRole**", "Rangi nadawane przez Bota po dołączeniu na serwer");
            }
            if (db.get(`${guild.id}_clever-bot`) !== "on") {
                embed0.addField(NO + " **Clever-Bot**", c + "Kanał dla clever-bota `[Premium]`");
            } else {
                embed0.addField(YES + " **Clever-Bot**", c + "Kanał dla clever-bota `[Premium]`");
            }
            if (db.get(`${guild.id}_commands`) !== "on") {
                embed0.addField(NO + " **Commands**", "Jeżeli wyłączone - komendy działają **tylko** dla Administratorów");
            } else {
                embed0.addField(YES + " **Commands**", "Jeżeli wyłączone - komendy działają **tylko** dla Administratorów");
            }
            if (db.get(`${guild.id}_fun-replies`) !== "on") {
                embed0.addField(NO + " **Fun-Replies**", "Reagowanie na niektóre wiadomości");
            } else {
                embed0.addField(YES + " **Fun-Replies**", "Reagowanie na niektóre wiadomości");
            }
            if (db.get(`${guild.id}_level`) !== "on") {
                embed0.addField(NO + " **Level**", l + "System poziomów");
            } else {
                embed0.addField(YES + " **Level**", l + "System poziomów");
            }
            if (db.get(`${guild.id}_logs`) !== "on") {
                embed0.addField(NO + " **Logs**", ll + "Logi serwera");
            } else {
                embed0.addField(YES + " **Logs**", ll + "Logi serwera");
            }
            if (db.get(`${guild.id}_nsfw`) !== "on") {
                embed0.addField(NO + " **NSFW**", "Komendy *Not Safe For Work* (NSFW)");
            } else {
                embed0.addField(YES + " **NSFW**", "Komendy *Not Safe For Work* (NSFW)");
            }
            embed0.addField(YES + " **Prefix**", "Zmiana prefixu na serwerze")
            .setFooter("[1/2]", AV);
    
            return message.inlineReply(embed0);
        }
        
        if (args[0] === "2") {
            const embed0 = new Discord.MessageEmbed()
            .setColor("ORANGE")
            .setTitle("2. Przykłady")
            .addField("**Przykład I**", "```" + PREFIX + CMD + " autorole role0 Zweryfikowany```")
            .addField("**Przykład II**", "```" + PREFIX + CMD + " clever-bot channel #kanał-tekstowy```")
            .addField("**Przykład III**", "```" + PREFIX + CMD + " nsfw off```")
            .addField("**Przykład IV**", "```" + PREFIX + CMD + " prefix !!```")
            .addField("**Przykład V:**", "```" + PREFIX + CMD + " logs channel 796808512432767036```")
            .setFooter("[2/2]", AV);
    
            return message.inlineReply(embed0);
        }

        if (!args[0]) {
            const embed1 = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setAuthor("Dostępne ustawienia:", AV, db.get(member.user.id + "_link1") || AV)
            .setDescription("`autocheck`, `autorole`, `clever-bot`, `commands`, `fun-replies`, `logs`, `nsfw`, `prefix`")
            .setFooter("Nie wiesz co jest od czego lub chcesz sprawdzić wszystkie ustawienia? Użyj " + PREFIX + CMD + " 1");

            return message.inlineReply(embed1);
        }
    
        if (args[0] == "autocheck") {
            if (db.get(`${guild.id}_premium`) !== "on") {
                const embed0 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1") || AV)
                .setDescription(NO + " Funkcja dostępna tylko dla serwerów **PREMIUM**! (`" + PREFIX + "premium`)");
                return message.channel.send(embed0);
            }
            if (message.author.id !== message.guild.owner.id) {
                if (message.guild.id !== "672519357821091859") {
                const embed0 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1") || AV)
                .setDescription(NO + " Tylko właściciel serwera może to ustawić! (<@" + message.guild.owner.id + ">)");
                return message.channel.send(embed0);
                }
            }
            if (args[1] == "on") {
                if (db.get(`${guild.id}_autocheck`) === "on") {
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1") || AV)
                    .setDescription(YES + " Funkcja jest już włączona!");
                    return message.channel.send(embed0);
                }
                db.set(`${guild.id}_autocheck`, "on");
                db.set(`${guild.id}_autocheck_time`, "2");
                db.set(`${guild.id}_autocheck_punishment`, "kick");
    
                const embed0 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję! Domyślne ustawiono `wyrzucanie` konta poniżej `2 dni`.");
                return message.channel.send(embed0);
            } else if (args[1] == "off") {
                if (db.get(`${guild.id}_autocheck`) === "off") {
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!");
                    return message.channel.send(embed0);
                }
                db.set(`${guild.id}_autocheck`, "off");
    
                const embed0 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!");
                return message.channel.send(embed0);
            } else if (args[1] == "time") {
                if (args[2] == "0") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie **wszystkich** użytkowników!");
                    return message.channel.send(embed0);
                } else if (args[2] == "1") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **1 dnia**!");
                    return message.channel.send(embed0);
                } else if (args[2] == "2") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **2 dni**!");
                    return message.channel.send(embed0);
                } else if (args[2] == "3") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **3 dni**!");
                    return message.channel.send(embed0);
                } else if (args[2] == "4") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **4 dni**!");
                    return message.channel.send(embed0);
                } else if (args[2] == "5") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **5 dni**!");
                    return message.channel.send(embed0);
                } else if (args[2] == "6") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **6 dni**!");
                    return message.channel.send(embed0);
                } else if (args[2] == "7") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **7 dni**!");
                    return message.channel.send(embed0);
                } else if (args[2] == "8") {
                    db.set(`${guild.id}_autocheck_time`, args[2]);
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **8 dni**!");
                    return message.channel.send(embed0);
                } else {
                    let t;
                    if (db.get(`${guild.id}_autocheck_time`) === null) {
                        t = "Domyślnie: 2";
                    } else {
                        t = "Ustawione: " + db.get(`${guild.id}_autocheck_time`);
                    }
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Dodaj liczbę dni `0-8`, z czego `0` oznacza sprawdzanie i karę dla **wszystkich** nowych osób")
                    .setFooter(t);
                    return message.channel.send(embed0);
                }
            } else if (args[1] == "punishment") {
            if (args[2] == "ban") {
                db.set(`${guild.id}_autocheck_punishment`, args[2]);
                const embed0 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono sprawdzanie i karanie użytkowników **zbanowaniem**!");
                return message.channel.send(embed0);
            } else if (args[2] == "kick") {
                db.set(`${guild.id}_autocheck_punishment`, args[2]);
                const embed0 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono sprawdzanie i karanie użytkowników **wyrzuceniem**!");
                return message.channel.send(embed0);
            } else {
                const embed0 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
                .setFooter("Dostępne opcje: ban, kick");
                if (db.get(`${guild.id}_autocheck_punishment`) == "ban") {
                    if (db.get(`${guild.id}_autocheck`) == "on") {
                        embed0.setDescription(YES + " Aktualnie ustawiona kara: `ban`");
                    } else {
                        embed0.setDescription(NO + " Aktualnie ustawiona kara: `ban`");
                    }
                } else {
                    if (db.get(`${guild.id}_autocheck`) == "on") {
                        embed0.setDescription(YES + " Aktualnie ustawiona kara: `kick`");
                    } else {
                        embed0.setDescription(NO + "Aktualnie ustawiona kara: `kick`");
                    }
                }
                return message.channel.send(embed0);
            }
        } else {
            const embed0 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor("AutoCheck", AV, db.get(member.user.id + "_link1"))
            .setFooter("Dostępne opcje: off, on, time, punishment");
            if (db.get(`${guild.id}_autocheck`) == "on") {
                embed0.setDescription(YES + " Włączone");
            } else {
                embed0.setDescription(NO + " Wyłączone");
            }
            return message.channel.send(embed0);
        }
        };
                //
        if (args[0] == "autorole") {
            if (args[1] == "on") {
                if (db.get(`${guild.id}_autorole`) === "on") {
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!")
                    return message.channel.send(embed0);
                }
                db.set(`${guild.id}_autorole`, "on");
    
                const embed0 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!")
                return message.channel.send(embed0);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_autorole`) === "off") {
                    const embed0 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!")
                    return message.channel.send(embed0);
                }
                db.set(`${guild.id}_autorole`, "off");
    
                const embed0 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!")
                return message.channel.send(embed0);
            }
            /////////////////////////////////////////////////////////////////////////////////
            if (args[1] == "role0") {
                if (args[2] == "reset") {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Usunięto <@&" + db.get(`${guild.id}_autorole_role0`) + "> z AutoRole");
                    message.channel.send(embed1);
                    return db.set(`${guild.id}_autorole_role0`, null);
                }
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase());
                if (!role) {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiej roli na serwerze");
                    return message.channel.send(embed1);
                }
                db.set(`${guild.id}_autorole_role0`, role.id);
                const embed1 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Dodano <@&" + db.get(`${guild.id}_autorole_role0`) + "> do AutoRole");
                return message.channel.send(embed1);
            }
            if (args[1] == "role1") {
                if (args[2] == "reset") {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Usunięto <@&" + db.get(`${guild.id}_autorole_role1`) + "> z AutoRole")
                    message.channel.send(embed1);
                    return db.set(`${guild.id}_autorole_role1`, null);
                }
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase());
                if (!role) {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiej roli na serwerze");
                    return message.channel.send(embed1);
                }
                db.set(`${guild.id}_autorole_role1`, role);
                const embed1 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Dodano <@&" + db.get(`${guild.id}_autorole_role1`) + "> do AutoRole")
                return message.channel.send(embed1);
            }
            if (args[1] == "role2") {
                if (args[2] == "reset") {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Usunięto <@&" + db.get(`${guild.id}_autorole_role2`) + "> z AutoRole")
                    message.channel.send(embed1);
                    return db.set(`${guild.id}_autorole_role2`, null);
                }
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase());
                if (!role) {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiej roli na serwerze");
                    return message.channel.send(embed1);
                }
                db.set(`${guild.id}_autorole_role2`, role);
                const embed1 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Dodano <@&" + db.get(`${guild.id}_autorole_role2`) + "> do AutoRole")
                return message.channel.send(embed1);
            }
            if (args[1] == "role3") {
                if (args[2] == "reset") {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Usunięto <@&" + db.get(`${guild.id}_autorole_role3`) + "> z AutoRole")
                    message.channel.send(embed1);
                    return db.set(`${guild.id}_autorole_role3`, null);
                }
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase());
                if (!role) {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiej roli na serwerze");
                    return message.channel.send(embed1);
                }
                db.set(`${guild.id}_autorole_role3`, role);
                const embed1 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Dodano <@&" + db.get(`${guild.id}_autorole_role3`) + "> do AutoRole")
                return message.channel.send(embed1);
            }
            if (args[1] == "role4") {
                if (args[2] == "reset") {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Usunięto <@&" + db.get(`${guild.id}_autorole_role4`) + "> z AutoRole")
                    message.channel.send(embed1);
                    return db.set(`${guild.id}_autorole_role4`, null);
                }
                const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(" ").toLocaleLowerCase());
                if (!role) {
                    const embed1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiej roli na serwerze");
                    return message.channel.send(embed1);
                }
                db.set(`${guild.id}_autorole_role4`, role);
                const embed1 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Dodano <@&" + db.get(`${guild.id}_autorole_role4`) + "> do AutoRole")
                return message.channel.send(embed1);
            }
            if (args[1] == "reset") {
                db.set(`${guild.id}_autorole_role0`, null);
                db.set(`${guild.id}_autorole_role1`, null);
                db.set(`${guild.id}_autorole_role2`, null);
                db.set(`${guild.id}_autorole_role3`, null);
                db.set(`${guild.id}_autorole_role4`, null);
                const embed2 = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Usunięto wszystkie role z funkcji `AutoRole`!");
                return message.channel.send(embed2);
            } else {
                if (db.get(`${guild.id}_autorole`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                if (db.get(`${guild.id}_autorole_role0`) === null) {
                    role0 = NO + " Role0";
                } else {
                    role0 = YES + " Role0 [<@&" + db.get(`${guild.id}_autorole_role0`) + ">]";
                }
                if (db.get(`${guild.id}_autorole_role1`) === null) {
                    role1 = NO + " Role1";
                } else {
                    role1 = YES + " Role1 [<@&" + db.get(`${guild.id}_autorole_role1`) + ">]";
                }
                if (db.get(`${guild.id}_autorole_role2`) === null) {
                    role2 = NO + " Role2";
                } else {
                    role2 = YES + " Role2 [<@&" + db.get(`${guild.id}_autorole_role2`) + ">]";
                }
                if (db.get(`${guild.id}_autorole_role3`) === null) {
                    role3 = NO + " Role3";
                } else {
                    role3 = YES + " Role3 [<@&" + db.get(`${guild.id}_autorole_role3`) + ">]";
                }
                if (db.get(`${guild.id}_autorole_role4`) === null) {
                    role4 = NO + " Role4";
                } else {
                    role4 = YES + " Role4 [<@&" + db.get(`${guild.id}_autorole_role4`) + ">]";
                }
                const embed2 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("AutoRole", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon + "\n" + role0 + "\n" + role1 + "\n" + role2 + "\n" + role3 + "\n" + role4)
                .setFooter("Dostępne opcje: off, on, reset, role0, role1, role2, role3, role4");
                return message.channel.send(embed2);
            }
        }
        /////////////////////////////////////////////////////////////////////////////////
        if (args[0] == "commands") {
            if (args[1] == "on") {
                if (db.get(`${guild.id}_commands`) === "on") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Commands", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_commands`, "on");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Commands", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!")
                return message.channel.send(embed3);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_commands`) === "off") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Commands", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_commands`, "off");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Commands", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!")
                return message.channel.send(embed3);
            } else {
                if (db.get(`${guild.id}_commands`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                const embed3 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("Commands", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon)
                .setFooter("Dostępne opcje: off, on");
                return message.channel.send(embed3);
            }
        }
        if (args[0] == "mention") {
            if (args[1] == "on") {
                if (db.get(`${guild.id}_mention`) === "on") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Mention", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_mention`, "on");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Mention", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!")
                return message.channel.send(embed3);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_mention`) === "off") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Mention", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_mention`, "off");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Mention", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!")
                return message.channel.send(embed3);
            } else {
                if (db.get(`${guild.id}_mention`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                const embed3 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("Mention", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon)
                .setFooter("Dostępne opcje: off, on");
                return message.channel.send(embed3);
            }
        }
        if (args[0] == "level") {
            if (args[1] == "on") {
                if (db.get(`${guild.id}_level`) === "on") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_level`, "on");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!")
                return message.channel.send(embed3);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_level`) === "off") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_level`, "off");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!")
                return message.channel.send(embed3);
            }
            if (args[1] == "channel") {
                if (!args[2]) {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał tekstowy dla funkcji `Level`");
                    return message.channel.send(embed3);
                }
                let arg = args[2];
                const kanal =  client.channels.cache.get(args[2]) || message.guild.channels.cache.find(ch => ch.name.toLowerCase() === arg.toLocaleLowerCase()) || message.mentions.channels.first();
                if (!kanal) {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiego kanału")
                    .setFooter("Możesz podać ID / oznaczyć / wpisać nazwę kanału")
                    return message.channel.send(embed3);
                }
                if (kanal.type !== "text") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał **tekstowy** dla funkcji `Level`");
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_level_channel`, kanal.id);
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono kanał <#" + db.get(`${guild.id}_level_channel`) + "> dla funkcji `Level`")
                return message.channel.send(embed3);
            } else {
                if (db.get(`${guild.id}_level`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                if (db.get(`${guild.id}_level_channel`) == null) {
                    offonk = NO + " Kanał: `nie ustawiony`";
                } else {
                    offonk = YES + " Kanał: <#" + db.get(`${guild.id}_level_channel`) + ">";
                }
                const embed3 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("Level", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon)
                .setFooter("Dostępne opcje: off, on, channel");
                return message.channel.send(embed3);
            }
        }
        if (args[0] == "nsfw") {
            if (args[1] == "on") {
                if (db.get(`${guild.id}_nsfw`) === "on") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("NSFW", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_nsfw`, "on");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("NSFW", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!")
                return message.channel.send(embed3);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_nsfw`) === "off") {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("NSFW", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!")
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_nsfw`, "off");
    
                const embed3 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("NSFW", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!")
                return message.channel.send(embed3);
            } else {
                if (db.get(`${guild.id}_nsfw`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                const embed3 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("NSFW", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon)
                .setFooter("Dostępne opcje: off, on");
                return message.channel.send(embed3);
            }
        }
        if (args[0] == "prefix") {
            if (args[1] == "reset") {
                db.set(guild.id + "_prefix", "w!");
                const embed4 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("PREFIX", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono Prefix serwera na `w!`");
                return message.channel.send(embed4);
            }
            if (!args[1]) {
                const embed4 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("PREFIX", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " " + db.get(guild.id + "_PREFIX"))
                .setFooter("Dostępne opcje: reset");
                return message.channel.send(embed4);
            }
            if (args[1].length <= 10) {
                db.set(guild.id + "_PREFIX", args[1]);
                db.set(guild.id + "_prefix", args[1]);
                const embed4 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("PREFIX", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono Prefix serwera na `" + args[1] + "`");
                return message.channel.send(embed4);
            } else {
                const embed4 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("PREFIX - MAX 10 ZNAKÓW", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " " + db.get(guild.id + "_PREFIX"))
                .setFooter("Dostępne opcje: reset");
                return message.channel.send(embed4);
            }
        }
        if (args[0] == "fun-replies") {
            if (args[1] == "on") {
                if (db.get(`${guild.id}_fun-replies`) === "on") {
                    const embed5 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Fun-Replies", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!")
                    return message.channel.send(embed53);
                }
                db.set(`${guild.id}_fun-replies`, "on");
    
                const embed5 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Fun-Replies", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!")
                return message.channel.send(embed5);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_fun-replies`) === "off") {
                    const embed5 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Fun-Replies", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!")
                    return message.channel.send(embed5);
                }
                db.set(`${guild.id}_fun-replies`, "off");
    
                const embed5 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Fun-Replies", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!")
                return message.channel.send(embed5);
            } else {
                if (db.get(`${guild.id}_fun-replies`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                const embed5 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("NSFW", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon)
                .setFooter("Dostępne opcje: off, on");
                return message.channel.send(embed5);
            }
        }
        if (args[0] == "spotted") {
            if (guild.id !== "672519357821091859") return message.channel.send("Funkcja `Spotted` jest niedostępna.");
            if (args[1] == "on") {
                if (db.get("spotted") === "on") {
                    const embed6 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!");
                    return message.channel.send(embed6);
                }
                db.set("spotted", "on");
    
                const embed6 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!");
                return message.channel.send(embed6);
            }
            if (args[1] == "off") {
                if (db.get("spotted") === "off") {
                    const embed6 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!");
                    return message.channel.send(embed6);
                }
                db.set("spotted", "off");
    
                const embed6 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!");
                return message.channel.send(embed6);
            }
            if (args[1] == "channel") {
                if (!args[2]) {
                    const embed6 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał tekstowy dla funkcji `Spotted`");
                    return message.channel.send(embed6);
                }
                const kanal = message.mentions.channels.first() || client.channels.cache.get(args[2]) || message.guild.channels.cache.find(ch => ch.name.toLowerCase() === args.join(" ").toLocaleLowerCase());
                if (!kanal) {
                    const embed6 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiego kanału");
                    return message.channel.send(embed6);
                }
                if (kanal.type !== "text") {
                    const embed6 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał **tekstowy** dla funkcji `Spotted`");
                    return message.channel.send(embed6);
                }
                db.set("spotted_channel", kanal.id);
                const embed6 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono kanał <#" + db.get(`spotted_channel`) + "> dla funkcji `Spotted`")
                return message.channel.send(embed6);
            } else {
                if (db.get("spotted") !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                if (db.get("spotted_channel") == null) {
                    offonk = NO + " Kanał: `nie ustawiony`";
                } else {
                    offonk = YES + " Kanał: <#" + db.get("spotted_channel") + ">";
                }
                const embed6 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("Spotted", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon + "\n" + offonk)
                .setFooter("Dostępne opcje: off, on, channel");
                return message.channel.send(embed6);
            }
        }
        if (args[0] == "clever-bot") {
            if (db.get(`${guild.id}_premium`) !== "on") {
                const embed0 = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Funkcja dostępna tylko dla serwerów **PREMIUM**! (" + PREFIX + "premium)");
                return message.channel.send(embed0);
            }
            if (args[1] == "on") {
                if (db.get(`${guild.id}_clever-bot`) === "on") {
                    const embed7 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!");
                    return message.channel.send(embed7);
                }
                db.set(`${guild.id}_clever-bot`, "on");
    
                const embed7 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!");
                return message.channel.send(embed7);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_clever-bot`) === "off") {
                    const embed7 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!");
                    return message.channel.send(embed7);
                }
                db.set(`${guild.id}_clever-bot`, "off");
    
                const embed7 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!");
                return message.channel.send(embed7);
            }
            if (args[1] == "channel") {
                if (!args[2]) {
                    const embed7 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał tekstowy dla funkcji `Clever-Bot`");
                    return message.channel.send(embed7);
                }
                let arg = args[2];
                const kanal =  client.channels.cache.get(args[2]) || message.guild.channels.cache.find(ch => ch.name.toLowerCase() === arg.toLocaleLowerCase()) || message.mentions.channels.first();
                if (!kanal) {
                    const embed7 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiego kanału")
                    .setFooter("Możesz podać ID / oznaczyć / wpisać nazwę kanału")
                    return message.channel.send(embed7);
                }
                if (kanal.type !== "text") {
                    const embed7 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał **tekstowy** dla funkcji `Clever-Bot`");
                    return message.channel.send(embed7);
                }
                db.set(`${guild.id}_clever-bot_channel`, kanal.id);
                const embed7 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono kanał <#" + db.get(`${guild.id}_clever-bot_channel`) + "> dla funkcji `Clever-Bot`")
                return message.channel.send(embed7);
            } else {
                if (db.get(`${guild.id}_clever-bot`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                if (db.get(`${guild.id}_clever-bot_channel`) == null) {
                    offonk = NO + " Kanał: `nie ustawiony`";
                } else {
                    offonk = YES + " Kanał: <#" + db.get(`${guild.id}_clever-bot_channel`) + ">";
                }
                const embed7 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("Clever-Bot", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon + "\n" + offonk)
                .setFooter("Dostępne opcje: off, on, channel");
                return message.channel.send(embed7);
            }
        }
        if (args[0] == "logs") {
            if (args[1] == "on") {
                if (db.get(`${guild.id}_logs`) === "on") {
                    const embed8 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!");
                    return message.channel.send(embed8);
                }
                db.set(`${guild.id}_logs`, "on");
    
                const embed8 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!");
                return message.channel.send(embed8);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_logs`) === "off") {
                    const embed8 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!");
                    return message.channel.send(embed8);
                }
                db.set(`${guild.id}_logs`, "off");
    
                const embed8 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!");
                return message.channel.send(embed8);
            }
            if (args[1] == "channel") {
                if (!args[2]) {
                    const embed8 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał tekstowy dla funkcji `Logs`");
                    return message.channel.send(embed8);
                }
                let arg = args[2];
                const kanal =  client.channels.cache.get(args[2]) || message.guild.channels.cache.find(ch => ch.name.toLowerCase() === arg.toLocaleLowerCase()) || message.mentions.channels.first();
                if (!kanal) {
                    const embed8 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Nie znalazłem takiego kanału")
                    .setFooter("Możesz podać ID / oznaczyć / wpisać nazwę kanału")
                    return message.channel.send(embed8);
                }
                if (kanal.type !== "text") {
                    const embed8 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Podaj kanał **tekstowy** dla funkcji `Logs`");
                    return message.channel.send(embed8);
                }
                db.set(`${guild.id}_logs_channel`, kanal.id);
                const embed8 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Ustawiono kanał <#" + db.get(`${guild.id}_logs_channel`) + "> dla funkcji `Logs`")
                return message.channel.send(embed8);
            } else {
                if (db.get(`${guild.id}_logs`) !== "on") {
                    offon = NO + " Wyłączone";
                } else {
                    offon = YES + " Włączone";
                }
                if (db.get(`${guild.id}_logs_channel`) == null) {
                    offonk = NO + " Kanał: `nie ustawiony`";
                } else {
                    offonk = YES + " Kanał: <#" + db.get(`${guild.id}_logs_channel`) + ">";
                }
                const embed8 = new Discord.MessageEmbed()
                .setColor("YELLOW")
                .setAuthor("Logs", AV, db.get(member.user.id + "_link1"))
                .setDescription(offon + "\n" + offonk)
                .setFooter("Dostępne opcje: off, on, channel");
                return message.channel.send(embed8);
            }
        }
        if (args[0] == "stats") {
            if (guild.id !== "672519357821091859") return message.channel.send("Funkcja `Stats` jest niedostępna.");
            if (args[1] == "on") {
                if (db.get(`${guild.id}_stats`) === "on") {
                    const embed10 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Stats", AV, db.get(member.user.id + "_link1"))
                    .setDescription(YES + " Funkcja jest już włączona!");
                    return message.channel.send(embed10);
                }
                db.set(`${guild.id}_stats`, "on");
    
                const embed10 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Stats", AV, db.get(member.user.id + "_link1"))
                .setDescription(YES + " Włączono funkcję!");
                return message.channel.send(embed10);
            }
            if (args[1] == "off") {
                if (db.get(`${guild.id}_stats`) === "off") {
                    const embed10 = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Stats", AV, db.get(member.user.id + "_link1"))
                    .setDescription(NO + " Funkcja jest już wyłączona!");
                    return message.channel.send(embed10);
                }
                db.set(`${guild.id}_stats`, "off");
    
                const embed10 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setAuthor("Stats", AV, db.get(member.user.id + "_link1"))
                .setDescription(NO + " Wyłączono funkcję!");
                return message.channel.send(embed10);
            }
            if (args[1] == "channel_users") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_users`, null);
                    return message.channel.send("Zresetowano!");
                }
                let arg = args[2];
                const kanal =  client.channels.cache.get(args[2]) || message.guild.channels.cache.find(ch => ch.name.toLowerCase() === arg.toLocaleLowerCase()) || message.mentions.channels.first();
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_users`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_bots") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_bots`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_bots`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_members") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_members`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_members`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_channels") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_channels`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_channels`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_roles") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_roles`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_roles`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_online") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_onlines`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_onlines`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_offline") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_offlines`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_offlines`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_bans") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_bans`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_bans`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "channel_upgrades") {
                if (!args[2]) return message.channel.send("Podaj ID kanału głosowego");
                if (args[2] == "reset") {
                    db.set(`${guild.id}_stats_channel_upgrades`, null);
                    return message.channel.send("Zresetowano!");
                }
                const kanal = client.channels.cache.get(args[2]);
                if (!kanal) return message.channel.send("Podaj poprawne ID kanału głosowego");
                if (kanal.type !== "voice") return message.channel.send("Podaj poprawne ID kanału głosowego");
                db.set(`${guild.id}_stats_channel_upgrades`, args[2]);
                return message.channel.send(embed2);
            }
            if (args[1] == "reset") {
                db.set(`${guild.id}_stats_channel_users`, null);
                db.set(`${guild.id}_stats_channel_bots`, null);
                db.set(`${guild.id}_stats_channel_members`, null);
                db.set(`${guild.id}_stats_channel_channels`, null);
                db.set(`${guild.id}_stats_channel_roles`, null);
                db.set(`${guild.id}_stats_channel_onlines`, null);
                db.set(`${guild.id}_stats_channel_offlines`, null);
                db.set(`${guild.id}_stats_channel_bans`, null);
                db.set(`${guild.id}_stats_channel_upgrades`, null);
                return message.channel.send("Zresetowano!");
            } else {
                return message.channel.send("**Dostępne opcje:**\n`off`, `on`, `reset`, `channel_users`, `channel_bots`, `channel_members`, `channel_channels`, `channel_roles`, `channel_online`, `channel_offline`, `channel_bans`, `channel_upgrades`");
            }
        }
    
    } catch (err) {
        embederr.setDescription("```" + err.message + "```");
    
        try {
          message.channel.send(embederr);
          embederr.setFooter(`gID: ${message.guild.id}, gN: ${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || 'https://cdn.discordapp.com/embed/avatars/0.png');
          return client.channels.cache.get(db.get('bot_errors_channel')).send(embederr);
        } catch (err) {
          return;
        }
      }
      }
      }
      };