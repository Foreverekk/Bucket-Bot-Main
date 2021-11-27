const BaseCommand = require('../../utils/structures/BaseCommand');
const talkedRecently = new Set();

module.exports = class MenuCommand extends BaseCommand {
  constructor() {
    super('menu', 'other', []);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    if (message.channel.type === 'dm') return;
    if (talkedRecently.has(message.author.id)) {
      return message.react(client.cdemoji);
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, client.cd);
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageButton, MessageActionRow, MessageMenu, MessageMenuOption, ButtonCollector } = require('discord-buttons');

    try {
        if (message.author.id !== '607937967130017807' && message.author.id !== '444177942902472704' && message.author.id !== '685993929962946667') return;

        let option00 = new MessageMenuOption()
        .setLabel('Zabierz Role')
        .setEmoji('❌')
        .setValue('zabierz');

        let option0 = new MessageMenuOption()
        .setLabel('Samica')
        .setEmoji('🍑')
        .setValue('samica');
        let option1 = new MessageMenuOption()
        .setLabel('Człowiek')
        .setEmoji('🍆')
        .setValue('czlowiek');
        
        let menu0 = new MessageMenu()
        .setID('menu-plec')
        .setPlaceholder('Płeć')
        .setMaxValues(1)
        .setMinValues(1)
        .addOption(option0)
        .addOption(option1)
        .addOption(option00);
        //
        let option2 = new MessageMenuOption()
        .setLabel('W związku')
        .setEmoji('💞')
        .setValue('w-zwiazku');
        let option3 = new MessageMenuOption()
        .setLabel('Samotny(-a)')
        .setEmoji('😎')
        .setValue('samotny');
        
        let menu1 = new MessageMenu()
        .setID('menu-status')
        .setPlaceholder('Status')
        .setMaxValues(1)
        .setMinValues(1)
        .addOption(option2)
        .addOption(option3)
        .addOption(option00);
        //
        let option4 = new MessageMenuOption()
        .setLabel('21+')
        .setEmoji('🚷')
        .setValue('21plus');
        let option5 = new MessageMenuOption()
        .setLabel('18+')
        .setEmoji('🚷')
        .setValue('18plus');
        let option6 = new MessageMenuOption()
        .setLabel('16+')
        .setEmoji('🔞')
        .setValue('16plus');
        let option7 = new MessageMenuOption()
        .setLabel('14+')
        .setEmoji('🔞')
        .setValue('14plus');
        let option8 = new MessageMenuOption()
        .setLabel('12+')
        .setEmoji('🔞')
        .setValue('12plus');
        let option9 = new MessageMenuOption()
        .setLabel('10+')
        .setEmoji('🔞')
        .setValue('10plus');
        
        let menu2 = new MessageMenu()
        .setID('menu-wiek')
        .setPlaceholder('Wiek')
        .setMaxValues(1)
        .setMinValues(1)
        .addOption(option4)
        .addOption(option5)
        .addOption(option6)
        .addOption(option7)
        .addOption(option8)
        .addOption(option9)
        .addOption(option00);
        //
        let option10 = new MessageMenuOption()
        .setLabel('Mazowsze')
        .setEmoji('🌍')
        .setValue('mazowsze');
        let option11 = new MessageMenuOption()
        .setLabel('Dolnośląskie')
        .setEmoji('🌍')
        .setValue('dolnoslaskie');
        let option12 = new MessageMenuOption()
        .setLabel('Kujawsko-Pomorskie')
        .setEmoji('🌍')
        .setValue('kujawsko-pomorskie');
        let option13 = new MessageMenuOption()
        .setLabel('Lubelskie')
        .setEmoji('🌍')
        .setValue('lubelskie');
        let option14 = new MessageMenuOption()
        .setLabel('Opolskie')
        .setEmoji('🌍')
        .setValue('opolskie');
        let option15 = new MessageMenuOption()
        .setLabel('Lubuskie')
        .setEmoji('🌍')
        .setValue('lubuskie');
        let option16 = new MessageMenuOption()
        .setLabel('Łódzkie')
        .setEmoji('🌍')
        .setValue('lodzkie');
        let option17 = new MessageMenuOption()
        .setLabel('Podkarpackie')
        .setEmoji('🌍')
        .setValue('podkarpackie');
        let option18 = new MessageMenuOption()
        .setLabel('Podlaskie')
        .setEmoji('🌍')
        .setValue('podlaskie');
        let option19 = new MessageMenuOption()
        .setLabel('Śląskie')
        .setEmoji('🌍')
        .setValue('slaskie');
        let option20 = new MessageMenuOption()
        .setLabel('Warmińsko-Mazurskie')
        .setEmoji('🌍')
        .setValue('warminsko-mazurskie');
        let option21 = new MessageMenuOption()
        .setLabel('Pomorskie')
        .setEmoji('🌍')
        .setValue('pomorskie');
        let option22 = new MessageMenuOption()
        .setLabel('Zachodniopomorskie')
        .setEmoji('🌍')
        .setValue('zachodniopomorskie');
        let option23 = new MessageMenuOption()
        .setLabel('Świętokrzyskie')
        .setEmoji('🌍')
        .setValue('swietokrzyskie');
        let option24 = new MessageMenuOption()
        .setLabel('Wielkopolskie')
        .setEmoji('🌍')
        .setValue('wielkopolskie');
        let option25 = new MessageMenuOption()
        .setLabel('Małopolskie')
        .setEmoji('🌍')
        .setValue('malopolskie');
        
        let menu3 = new MessageMenu()
        .setID('menu-wojewodztwo')
        .setPlaceholder('Województwo')
        .setMaxValues(1)
        .setMinValues(1)
        .addOption(option10)
        .addOption(option11)
        .addOption(option12)
        .addOption(option13)
        .addOption(option14)
        .addOption(option15)
        .addOption(option16)
        .addOption(option17)
        .addOption(option18)
        .addOption(option19)
        .addOption(option20)
        .addOption(option21)
        .addOption(option22)
        .addOption(option23)
        .addOption(option24)
        .addOption(option25)
        .addOption(option00);
        //
        let option26 = new MessageMenuOption()
        .setLabel('Sztuka i Zdjęcia')
        .setEmoji('🖼')
        .setValue('sztuka-i-zdjecia');
        let option27 = new MessageMenuOption()
        .setLabel('Gry')
        .setEmoji('🎮')
        .setValue('gry');
        let option28 = new MessageMenuOption()
        .setLabel('Książki i Filmy')
        .setEmoji('🎭')
        .setValue('ksiazki-i-filmy');
        let option29 = new MessageMenuOption()
        .setLabel('Anime')
        .setEmoji('🧩')
        .setValue('anime');
        let option30 = new MessageMenuOption()
        .setLabel('Historia i Militaria')
        .setEmoji('🔫')
        .setValue('historia-i-militaria');
        let option31 = new MessageMenuOption()
        .setLabel('Muzyka')
        .setEmoji('🎧')
        .setValue('muzyka');
        
        let menu4 = new MessageMenu()
        .setID('menu-zainteresowania')
        .setPlaceholder('Zainteresowania')
        .setMaxValues(6)
        .setMinValues(1)
        .addOption(option26)
        .addOption(option27)
        .addOption(option28)
        .addOption(option29)
        .addOption(option30)
        .addOption(option31)
        .addOption(option00);
        //
        let option33 = new MessageMenuOption()
        .setLabel('Czat nam Umar')
        .setEmoji('⛑')
        .setValue('czat-nam-umar');
        let option34 = new MessageMenuOption()
        .setLabel('Newsy')
        .setEmoji('🔊')
        .setValue('newsy');
        let option35 = new MessageMenuOption()
        .setLabel('NSFW ( ͡° ͜ʖ ͡°)')
        .setEmoji('♋')
        .setValue('nsfw');
        let option36 = new MessageMenuOption()
        .setLabel('Cebulaq')
        .setEmoji('🧅')
        .setValue('cebulaq');
        let option37 = new MessageMenuOption()
        .setLabel('Nauczyciel')
        .setEmoji('🎓')
        .setValue('nauczyciel');
        
        let menu5 = new MessageMenu()
        .setID('menu-dodatkowe')
        .setPlaceholder('Dodatkowe')
        .setMaxValues(5)
        .setMinValues(1)
        .addOption(option33)
        .addOption(option34)
        .addOption(option35)
        .addOption(option36)
        .addOption(option37)
        .addOption(option00);
        //
        let option38 = new MessageMenuOption()
        .setLabel('Zwalony')
        .setValue('zwalony');
        let option39 = new MessageMenuOption()
        .setLabel('Stały')
        .setValue('staly');
        let option40 = new MessageMenuOption()
        .setLabel('Kujawsko-Pomorskie')
        .setValue('kujawsko-pomorskie');
        let option41 = new MessageMenuOption()
        .setLabel('Alabama')
        .setValue('alabama');
        
        let menu6 = new MessageMenu()
        .setID('menu-stan-konia')
        .setPlaceholder('Stan konia')
        .setMaxValues(1)
        .setMinValues(1)
        .addOption(option38)
        .addOption(option39)
        .addOption(option40)
        .addOption(option41);

        const row0 = new MessageActionRow()
        .addComponent(menu0);
        const row1 = new MessageActionRow()
        .addComponent(menu1);
        const row2 = new MessageActionRow()
        .addComponent(menu2);
        const row3 = new MessageActionRow()
        .addComponent(menu3);
        const row4 = new MessageActionRow()
        .addComponent(menu4);
        const row5 = new MessageActionRow()
        .addComponent(menu5);
        const row6 = new MessageActionRow()
        .addComponent(menu6);

        const embed0 = new Discord.MessageEmbed()
        .setColor(client.cInfo)
        .setFooter('(1/2) Reaction Role', 'https://images-ext-2.discordapp.net/external/DeP1m6MinbDxYeoOZhsz2teGjHlHKVt6MVymDqOgmpM/https/cdn.discordapp.com/emojis/875151681174781992.gif');
        const embed1 = new Discord.MessageEmbed()
        .setColor(client.cInfo)
        .setFooter('(2/2) Reaction Role', 'https://images-ext-2.discordapp.net/external/DeP1m6MinbDxYeoOZhsz2teGjHlHKVt6MVymDqOgmpM/https/cdn.discordapp.com/emojis/875151681174781992.gif');

        await message.channel.send(embed0, { components: [row0, row1, row2, row3, row4] });
        await message.channel.send(embed1, { components: [row5, row6] });
  
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
      }
      };