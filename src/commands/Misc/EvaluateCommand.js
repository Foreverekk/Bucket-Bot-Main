const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class EvaluateCommand extends BaseCommand {
  constructor() {
    super('evaluate', 'other', ['eval']);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    const Discord = require('discord.js');
    const db = require('quick.db');

      if (message.author.id !== '607937967130017807' && message.author.id !== '444177942902472704') {
          const embed0 = new Discord.MessageEmbed()
          .setColor(client.cNeg)
          .setAuthor(message.member.user.tag, AV, db.get(`${message.author.id}_link1`) || AV)
          .setDescription(`${client.no} Nie posiadasz wymaganych uprawnień.`);

          return message.channel.send(embed0);
      }

    function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
          return text;
    }
    
    try {
      const code = args.join(' ');
      let evaled = eval(code);
    
      if (typeof evaled !== 'string')
        evaled = require('util').inspect(evaled);
    
      message.channel.send(clean(evaled), {code:'xl'});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

    }
  }