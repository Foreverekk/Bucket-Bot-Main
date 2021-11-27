const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const db = require('quick.db');
const talkedRecently = new Set();

module.exports = class RandomCommand extends BaseCommand {
  constructor() {
    super('random', '4fun', ['r'], false);
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
      let pepes = [
        '( ͡° ͜ʖ ͡°)',
        '¯\\_(ツ)_/¯',
        'ʕ•ᴥ•ʔ',
        '(▀̿Ĺ̯▀̿ ̿)',
        '(ง ͠° ͟ل͜ ͡°)ง',
        'ಠ_ಠ',
        "̿'̿'\\̵͇̿̿\\з=( ͠° ͟ʖ ͡°)=ε/̵͇̿̿/'̿̿ ̿ ̿ ̿ ̿ ̿",
        '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]',
        "﴾͡๏̯͡๏﴿ O'RLY?",
        '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
        '(ᵔᴥᵔ)',
        '(¬‿¬)',
        '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
        '(づ￣ ³￣)づ',
        'ლ(ಠ益ಠლ)',
        'ಠ╭╮ಠ',
        '♪~ ᕕ(ᐛ)ᕗ',
        'ヾ(⌐■_■)ノ♪',
        '◉_◉',
        '\\ (•◡•) /',
        '༼ʘ̚ل͜ʘ̚༽',
        '┬┴┬┴┤(･_├┬┴┬┴',
        'ᕦ(ò_óˇ)ᕤ',
        '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻',
        '（╯°□°）╯︵( .o.)',
        'ಠ‿↼',
        '◔ ⌣ ◔',
        '(ノಠ益ಠ)ノ彡┻━┻',
        '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
        "̿ ̿ ̿'̿'\̵͇̿̿\з=(•_•)=ε/̵͇̿̿/'̿'̿ ̿",
        '(;´༎ຶД༎ຶ`)',
        '♥‿♥',
        'ᕦ(ò_óˇ)ᕤ',
        '(•_•) ( •_•)>⌐■-■ (⌐■_■)',
        '⌐╦╦═─ ಠ_ಠ , (¬‿¬)',
        '˙ ͜ʟ˙',
        ":')",
        '(°ロ°)☝',
        'ಠ⌣ಠ',
        '(；一_一)',
        '( ⚆ _ ⚆ )',
        '☜(⌒▽⌒)☞',
        "(ʘᗩʘ')",
        '¯\\(°_o)/¯',
        'ლ,ᔑ•ﺪ͟͠•ᔐ.ლ',
        '(ʘ‿ʘ)',
        'ಠ~ಠ',
        'ಠ_ಥ',
        'ಠ‿↼',
        '(>ლ)',
        '(ღ˘⌣˘ღ)',
        'ಠoಠ',
        'ರ_ರ',
        '◔ ⌣ ◔',
        '(✿´‿`)',
        'ب_ب',
        '┬─┬﻿ ︵ /(.□. ）',
        '☼.☼',
        '^̮^',
        '(>人<)',
        '>_>',
        '(/) (°,,°) (/)',
        '(･.◤)',
        '=U',
        '~(˘▾˘~)',
        '| (• ◡•)| (❍ᴥ❍ʋ)'
      ];
      let dapepe = Math.floor(Math.random() * pepes.length);

      const embed0 = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('```' + pepes[dapepe] + '```');

      return message.lineReplyNoMention(embed0);

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