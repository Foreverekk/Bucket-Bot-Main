const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class ConfiggCommand extends BaseCommand {
  constructor() {
    super('configg', 'moderator', ['conff', 'ustaww']);
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
        const INFO = client.eInfo;
        const INFOO = client.eInfoo;
        let arg0;
        if (args[0]) arg0 = args[0];
        let arg1;
        if (args[1]) arg1 = args[1];
        let arg2;
        if (args[2]) arg2 = args[2];
        let offon0;
        let offon1;
        let role0;
        let role1;
        let role2;
        let role3;
        let role4;

        const role = db.get(`${guild.id}_administrator_role`);
        if (!member.hasPermission('ADMINISTRATOR')) {
            const embed0 = new Discord.MessageEmbed()
            .setColor('#cc0000')
            .setAuthor(member.user.tag, AV, db.get(`${member.user.id}_link1`) || AV)
            .setDescription(`${NO} Nie posiadasz wymaganych uprawnień i/lub rangi Administratora`);
        if (!role) {
            embed0.setFooter('[config] Admin nie został ustawiony', INFO);
  
            return message.lineReplyNoMention(embed0);
        } else {
          if (!member.roles.has(role)) {
            const embed0 = new Discord.MessageEmbed()
            .setColor('#cc0000')
            .setAuthor(member.user.tag, AV, db.get(`${member.user.id}_link1`) || AV)
            .setDescription(`${NO} Nie posiadasz wymaganych uprawnień i/lub rangi Administratora`);
    
            return message.lineReplyNoMention(embed0);
        }
        }

        } else {
          if (!args[0] || arg0.toLowerCase() === '1' || arg0.toLowerCase() === 'help' || arg0.toLowerCase() === 'pomoc') {
            let cbC;
            let lC;
            let lsC;
            let nsfwC
            if (db.get(`${guild.id}_clever-bot_channel`) === null ? cbC = '' : cbC = `<#${db.get(`${guild.id}_clever-bot_channel`)}> `);
            if (db.get(`${guild.id}_level_channel`) === null ? lC = '' : lC = `<#${db.get(`${guild.id}_level_channel`)}> `);
            if (db.get(`${guild.id}_logs_channel`) === null ? lsC = '' : lsC = `<#${db.get(`${guild.id}_logs_channel`)}> `);
            if (db.get(`${guild.id}_nsfw_channel`) === null ? nsfwC = '' : nsfwC = `<#${db.get(`${guild.id}_nsfw_channel`)}> `);
            let ac;
            let ar;
            let cb;
            let c;
            let fr;
            let l;
            let ls;
            let nsfw;
            let prefix;
            if (db.get(`${guild.id}_administrator`) !== 'on' ? ac = NO : ac = YES);
            if (db.get(`${guild.id}_autocheck`) !== 'on' ? ac = NO : ac = YES);
            if (db.get(`${guild.id}_autorole`) !== 'on' ? ar = NO : ar = YES);
            if (db.get(`${guild.id}_clever-bot`) !== 'on' ? cb = NO : cb = YES);
            if (db.get(`${guild.id}_commands`) !== 'on' ? c = NO : c = YES);
            if (db.get(`${guild.id}_fun-replies`) !== 'on' ? fr = NO : fr = YES);
            if (db.get(`${guild.id}_level`) !== 'on' ? l = NO : l = YES);
            if (db.get(`${guild.id}_logs`) !== 'on' ? ls = NO : ls = YES);
            if (db.get(`${guild.id}_moderator`) !== 'on' ? ac = NO : ac = YES);
            if (db.get(`${guild.id}_nsfw`) !== 'on' ? nsfw = NO : nsfw = YES);
            prefix = db.get(`${guild.id}_prefix`);

            const embed0 = new Discord.MessageEmbed()
            .setColor(client.cInfo)
            .addFields(
              { name: 'Dostępne:', value: '`administrator`, `autocheck`, `autorole`, `clever-bot`, `commands`, `fun-replies`, `logs`, `moderator`, `nsfw`, `prefix`', inline: true },
              { name: 'Użycie:', value: `${prefix}config __admin__ __role__ __**@admin**__`, inline: true },
              { name: '\u200B', value: '\u200B' },
              { name: `${ac} AutoCheck`, value: 'Sprawdzanie osób przy dołączaniu/zamknięcie serwera (ban/kick) `[Premium]`' },
              { name: `${ar} AutoRole`, value: 'Rangi nadawane przez Bota po dołączeniu na serwer' },
              { name: `${cb} Clever-Bot`, value: cbC + "Kanał dla clever-bot'a `[Premium]`" },
              { name: `${c} Commands`, value: 'Komendy będą dostępne tylko dla Administratorów `' + guild.name + '`' },
              { name: `${fr} Fun-Replies`, value: 'Reagowanie na niektóre wiadomości' },
              { name: `${l} Level`, value: lC + 'System poziomów `' + guild.name + '`' },
              { name: `${ls} Logs`, value: lsC + 'Logi serwera' },
              { name: `${nsfw} NSFW`, value: nsfwC + 'Treści **N**ot **S**afe **F**or **W**ork' },
              { name: `${YES} Prefix`, value: 'Zmiana prefixu (**' + prefix + '**)' }
            )
            .setFooter('[1/1] Pomoc', AV);

            return message.lineReplyNoMention(embed0);
          }

          if (arg0.toLowerCase() === 'autocheck') {
            if (db.get(`${guild.id}_premium`) !== 'on') {
              const embed0 = new Discord.MessageEmbed()
              .setColor(client.cNeg)
              .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`) || AV)
              .setDescription(NO + ' Funkcja dostępna tylko dla serwerów **PREMIUM**! (`' + PREFIX + 'premium`)');
              return message.channel.send(embed0);
          }
          if (message.author.id !== message.guild.owner.id) {
              if (guild.id !== '672519357821091859') {
              const embed0 = new Discord.MessageEmbed()
              .setColor(client.cNeg)
              .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`) || AV)
              .setDescription(NO + ' Tylko właściciel serwera może to ustawić! (<@' + message.guild.owner.id + '>)');
              return message.channel.send(embed0);
              }
          }
          if (arg1.toLowerCase() === 'on') {
              if (db.get(`${guild.id}_autocheck`) === 'on') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`) || AV)
                  .setDescription(INFOO + ' Funkcja jest już włączona!');
                  return message.channel.send(embed0);
              }
              db.set(`${guild.id}_autocheck`, 'on');
              db.set(`${guild.id}_autocheck_time`, '2');
              db.set(`${guild.id}_autocheck_punishment`, 'kick');
  
              const embed0 = new Discord.MessageEmbed()
              .setColor(client.cPoz)
              .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
              .setDescription(YES + ' Włączono funkcję! \n' + INFOO + ' Domyślne ustawiono `wyrzucanie` konta poniżej `2 dni`.');
              return message.channel.send(embed0);
          } else if (arg1.toLowerCase() === 'off') {
              if (db.get(`${guild.id}_autocheck`) === 'off') {
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(INFOO + ' Funkcja jest już wyłączona!');
                  return message.channel.send(embed0);
              }
              db.set(`${guild.id}_autocheck`, 'off');
  
              const embed0 = new Discord.MessageEmbed()
              .setColor(client.cPoz)
              .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
              .setDescription(NO + ' Wyłączono funkcję!');
              return message.channel.send(embed0);
          } else if (args[1] === 'time') {
              if (args[2] === '0') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie **wszystkich** użytkowników!');
                  return message.channel.send(embed0);
              } else if (args[2] === '1') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **1 dnia**!');
                  return message.channel.send(embed0);
              } else if (args[2] === '2') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **2 dni**!');
                  return message.channel.send(embed0);
              } else if (args[2] === '3') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **3 dni**!');
                  return message.channel.send(embed0);
              } else if (args[2] === '4') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **4 dni**!');
                  return message.channel.send(embed0);
              } else if (args[2] === '5') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **5 dni**!');
                  return message.channel.send(embed0);
              } else if (args[2] === '6') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **6 dni**!');
                  return message.channel.send(embed0);
              } else if (args[2] === '7') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **7 dni**!');
                  return message.channel.send(embed0);
              } else if (args[2] === '8') {
                  db.set(`${guild.id}_autocheck_time`, args[2]);
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cPoz)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(YES + ' Sprawdzanie i karanie użytkowników którzy posiadają konto poniżej **8 dni**!');
                  return message.channel.send(embed0);
              } else {
                  let t;
                  if (db.get(`${guild.id}_autocheck_time`) === null ? t = 'Domyślnie: 2' : t = 'Ustawione: ' + db.get(`${guild.id}_autocheck_time`));
                  const embed0 = new Discord.MessageEmbed()
                  .setColor(client.cNeg)
                  .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
                  .setDescription(NO + ' Dodaj liczbę dni `0-8`, z czego `0` oznacza sprawdzanie i karę dla **wszystkich** nowych osób')
                  .setFooter(t);
                  return message.channel.send(embed0);
              }
          } else if (args[1] === 'punishment' || args[1] === 'punish') {
          if (args[2] === 'ban') {
              db.set(`${guild.id}_autocheck_punishment`), args[2];
              const embed0 = new Discord.MessageEmbed()
              .setColor(client.cPoz)
              .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
              .setDescription(YES + ' Ustawiono sprawdzanie i karanie użytkowników **zbanowaniem**!');
              return message.channel.send(embed0);
          } else if (args[2] === 'kick') {
              db.set(`${guild.id}_autocheck_punishment`, args[2]);
              const embed0 = new Discord.MessageEmbed()
              .setColor(client.cPoz)
              .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
              .setDescription(YES + ' Ustawiono sprawdzanie i karanie użytkowników **wyrzuceniem**!');
              return message.channel.send(embed0);
          } else {
              const embed0 = new Discord.MessageEmbed()
              .setColor(client.cNeg)
              .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
              .setFooter('Opcje: ban, kick');
              if (db.get(`${guild.id}_autocheck_punishment`) === 'ban') {
                  if (db.get(`${guild.id}_autocheck`) === 'on') {
                      embed0.setDescription(YES + ' Aktualnie ustawiona kara: `ban`');
                  } else {
                      embed0.setDescription(NO + ' Aktualnie ustawiona kara: `ban`');
                  }
              } else {
                  if (db.get(`${guild.id}_autocheck`) === 'on') {
                      embed0.setDescription(YES + ' Aktualnie ustawiona kara: `kick`');
                  } else {
                      embed0.setDescription(NO + 'Aktualnie ustawiona kara: `kick`');
                  }
              }
              return message.channel.send(embed0);
          }
      } else {
          const embed0 = new Discord.MessageEmbed()
          .setColor(client.cNeg)
          .setAuthor('AutoCheck', AV, db.get(`${member.user.id}_link1`))
          .setFooter('Opcje: off, on, time, punishment');
          if (db.get(`${guild.id}_autocheck`) === 'on') {
              embed0.setDescription(YES + ' Włączone');
          } else {
              embed0.setDescription(NO + ' Wyłączone');
          }
          return message.channel.send(embed0);
      }
          };

          if (args[0] === 'commands') {
            if (args[1] === 'on') {
                if (db.get(`${guild.id}_commands`) === 'on') {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor(client.cPoz)
                    .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                    .setDescription(YES + ' Funkcja jest już włączona!')
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_commands`, 'on');
    
                const embed3 = new Discord.MessageEmbed()
                .setColor(client.cPoz)
                .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                .setDescription(YES + ' Włączono funkcję!')
                return message.channel.send(embed3);
            }
            if (args[1] === 'off') {
                if (db.get(`${guild.id}_commands`) === 'off') {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor(client.cPoz)
                    .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                    .setDescription(NO + ' Funkcja jest już wyłączona!')
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_commands`, 'off');
    
                const embed3 = new Discord.MessageEmbed()
                .setColor(client.cPoz)
                .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                .setDescription(NO + ' Wyłączono funkcję!')
                return message.channel.send(embed3);
            } else {
                if (db.get(`${guild.id}_commands`) !== 'on') {
                    offon = NO + ' Wyłączone';
                } else {
                    offon = YES + ' Włączone';
                }
                const embed3 = new Discord.MessageEmbed()
                .setColor(client.cInfo)
                .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                .setDescription(offon)
                .setFooter('Opcje: off, on');
                return message.channel.send(embed3);
            }
        };

        if (args[0] === 'level') {
            if (args[1] === 'on') {
                if (db.get(`${guild.id}_commands`) === 'on') {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor(client.cPoz)
                    .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                    .setDescription(YES + ' Funkcja jest już włączona!')
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_commands`, 'on');
    
                const embed3 = new Discord.MessageEmbed()
                .setColor(client.cPoz)
                .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                .setDescription(YES + ' Włączono funkcję!')
                return message.channel.send(embed3);
            }
            if (args[1] === 'off') {
                if (db.get(`${guild.id}_commands`) === 'off') {
                    const embed3 = new Discord.MessageEmbed()
                    .setColor(client.cPoz)
                    .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                    .setDescription(NO + ' Funkcja jest już wyłączona!')
                    return message.channel.send(embed3);
                }
                db.set(`${guild.id}_commands`, 'off');
    
                const embed3 = new Discord.MessageEmbed()
                .setColor(client.cPoz)
                .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                .setDescription(NO + ' Wyłączono funkcję!')
                return message.channel.send(embed3);
            } else {
                if (db.get(`${guild.id}_commands`) !== 'on') {
                    offon = NO + ' Wyłączone';
                } else {
                    offon = YES + ' Włączone';
                }
                const embed3 = new Discord.MessageEmbed()
                .setColor(client.cInfo)
                .setAuthor('Commands', AV, db.get(`${member.user.id}_link1`))
                .setDescription(offon)
                .setFooter('Opcje: off, on');
                return message.channel.send(embed3);
            }
        };

        };
        

    } catch (err) {
        embederr.setDescription("```" + err.message + "```");
    
        try {
          message.channel.send(embederr);
          embederr.setFooter(`gID: ${message.guild.id}, gN: ${message.guild.name}`, message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || 'https://cdn.discordapp.com/embed/avatars/0.png');
          if (db.get('bot_errors') === 'on') return client.channels.cache.get(db.get('bot_errors_channel')).send(embederr);
        } catch (err) {
          return;
        }
      }
      }
      }
      };