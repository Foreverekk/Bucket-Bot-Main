const BaseEvent = require('../../utils/structures/BaseEvent');
const talkedRecently0 = new Set();

module.exports = class ClickMenuEvent extends BaseEvent {
  constructor() {
    super('clickMenu');
  }
  
  async run(client, menu) {
    const Discord = require('discord.js');
    const db = require('quick.db');
    const { MessageMenu, MessageMenuOption } = require('discord-buttons');
    const member = menu.guild.members.cache.get(menu.clicker.user.id);
    const powod = 'Menu';

    try {

      if (menu.id === 'menu-plec') {
        const role0 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'samica');
        const role1 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'człowiek');
        if (!role0 || !role1) return await menu.reply.send(client.no + ' Niektóre role z sekcji `(' + menu.id + ')` nie istnieją, napisz do Administratora `' + menu.guild.name + '`', true);

        if (menu.values[0] === 'zabierz') {
          member.roles.remove(role0);
          member.roles.remove(role1);
          return await menu.reply.send('<:peepoBlush:877617543932706836> Zabrano wszystkie role z sekcji **Płeć**', true);
        }

        if (menu.values[0] === 'samica') {
          member.roles.add(role0);
          member.roles.remove(role1);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role0.id}>`, true);
        }
    
        if (menu.values[0] === 'czlowiek') {
          member.roles.add(role1);
          member.roles.remove(role0);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role1.id}>`, true);
        }
      };
      //
      if (menu.id === 'menu-status') {
        const role0 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'w związku');
        const role1 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'samotny');
        if (!role0 || !role1) return await menu.reply.send(client.no + ' Niektóre role z sekcji `(' + menu.id + ')` nie istnieją, napisz do Administratora `' + menu.guild.name + '`', true);

        if (menu.values[0] === 'zabierz') {
          member.roles.remove(role0);
          member.roles.remove(role1);
          return await menu.reply.send('<:peepoBlush:877617543932706836> Zabrano wszystkie role z sekcji **Status**', true);
        }

        if (menu.values[0] === 'w-zwiazku') {
          member.roles.add(role0);
          member.roles.remove(role1);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role0.id}>`, true);
        }
    
        if (menu.values[0] === 'samotny') {
          member.roles.add(role1);
          member.roles.remove(role0);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role1.id}>`, true);
        }
      };
      //
      if (menu.id === 'menu-wiek') {
        if (talkedRecently0.has(menu.clicker.id)) {
          return;
        } else {
        talkedRecently0.add(menu.clicker.id);
        setTimeout(() => {
          talkedRecently0.delete(menu.clicker.id);
        }, 30000);
        const role0 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === '21+');
        const role1 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === '18+');
        const role2 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === '16+');
        const role3 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === '14+');
        const role4 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === '12+');
        const role5 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === '10+');
        if (!role0 || !role1 || !role2 || !role3 || !role4 || !role5) return await menu.reply.send(client.no + ' Niektóre role sekcji `(' + menu.id + ')` nie istnieją, napisz do Administratora `' + menu.guild.name + '`', true);

        if (menu.values[0] === 'zabierz') {
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          return await menu.reply.send('<:peepoBlush:877617543932706836> Zabrano wszystkie role z sekcji **Wiek**', true);
        }

        if (menu.values[0] === '21plus') {
          member.roles.add(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role0.id}>`, true);
        }
    
        if (menu.values[0] === '18plus') {
          member.roles.add(role1);
          member.roles.remove(role0);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role1.id}>`, true);
        }

        if (menu.values[0] === '16plus') {
          member.roles.add(role2);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role2.id}>`, true);
        }

        if (menu.values[0] === '14plus') {
          member.roles.add(role3);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role4);
          member.roles.remove(role5);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role3.id}>`, true);
        }

        if (menu.values[0] === '12plus') {
          member.roles.add(role4);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role5);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role4.id}>`, true);
        }

        if (menu.values[0] === '10plus') {
          member.roles.add(role5);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role5.id}>`, true);
        }
      }
      };
      //
      if (menu.id === 'menu-wojewodztwo') {
        if (talkedRecently0.has(menu.clicker.id)) {
          return;
        } else {
        talkedRecently0.add(menu.clicker.id);
        setTimeout(() => {
          talkedRecently0.delete(menu.clicker.id);
        }, 30000);
        const role0 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'mazowsze');
        const role1 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'dolnośląskie');
        const role2 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'kujawsko-pomorskie');
        const role3 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'lubelskie');
        const role4 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'opolskie');
        const role5 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'lubuskie');
        const role6 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'łódzkie');
        const role7 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'podkarpackie');
        const role8 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'podlaskie');
        const role9 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'śląskie');
        const role10 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'warmińsko-mazurskie');
        const role11 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'pomorskie');
        const role12 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'zachodniopomorskie') || menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'zachodnio-pomorskie');
        const role13 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'świętokrzyskie');
        const role14 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'wielkopolskie');
        const role15 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'małopolskie');
        if (!role0 || !role1 || !role2 || !role3 || !role4 || !role5 || !role6 || !role7 || !role8 || !role9 || !role10 || !role11 || !role12 || !role13 || !role14 || !role15) return await menu.reply.send(client.no + ' Niektóre role sekcji `(' + menu.id + ')` nie istnieją, napisz do Administratora `' + menu.guild.name + '`', true);

        if (menu.values[0] === 'zabierz') {
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          return await menu.reply.send('<:peepoBlush:877617543932706836> Zabrano wszystkie role z sekcji **Województwo**', true);
        }

        if (menu.values[0] === 'mazowsze') {
          member.roles.add(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role0.id}>`, true);
        }
    
        if (menu.values[0] === 'dolnoslaskie') {
          member.roles.add(role1);
          member.roles.remove(role0);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role1.id}>`, true);
        }

        if (menu.values[0] === 'kujawsko-pomorskie') {
          member.roles.add(role2);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role2.id}>`, true);
        }

        if (menu.values[0] === 'lubelskie') {
          member.roles.add(role3);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role3.id}>`, true);
        }

        if (menu.values[0] === 'opolskie') {
          member.roles.add(role4);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role4.id}>`, true);
        }

        if (menu.values[0] === 'lubuskie') {
          member.roles.add(role5);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role5.id}>`, true);
        }

        if (menu.values[0] === 'lodzkie') {
          member.roles.add(role6);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role6.id}>`, true);
        }

        if (menu.values[0] === 'podkarpackie') {
          member.roles.add(role7);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role7.id}>`, true);
        }

        if (menu.values[0] === 'podlaskie') {
          member.roles.add(role8);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role8.id}>`, true);
        }

        if (menu.values[0] === 'slaskie') {
          member.roles.add(role9);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role9.id}>`, true);
        }

        if (menu.values[0] === 'warminsko-mazurskie') {
          try {
          member.roles.add(role10);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
        } catch (err) {
          return;
        }
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role10.id}>`, true);
        }

        if (menu.values[0] === 'pomorskie') {
          try {
          member.roles.add(role11);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
        } catch (err) {
          return;
        }
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role11.id}>`, true);
        }

        if (menu.values[0] === 'zachodniopomorskie') {
          try {
          member.roles.add(role12);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role13);
          member.roles.remove(role14);
          member.roles.remove(role15);
        } catch (err) {
          return;
        }
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role12.id}>`, true);
        }

        if (menu.values[0] === 'swietokrzyskie') {
          try {
          member.roles.add(role13);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role14);
          member.roles.remove(role15);
        } catch (err) {
          return;
        }
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role13.id}>`, true);
        }

        if (menu.values[0] === 'wielkopolskie') {
          member.roles.add(role14);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role15);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role14.id}>`, true);
        }

        if (menu.values[0] === 'malopolskie') {
          member.roles.add(role15);
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          member.roles.remove(role6);
          member.roles.remove(role7);
          member.roles.remove(role8);
          member.roles.remove(role9);
          member.roles.remove(role10);
          member.roles.remove(role11);
          member.roles.remove(role12);
          member.roles.remove(role13);
          member.roles.remove(role14);
          await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano rolę <@&${role15.id}>`, true);
        }
      }
      };
      //
      if (menu.id === 'menu-zainteresowania') {
        const role0 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'sztuka i zdjęcia');
        const role1 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'gry');
        const role2 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'książki i filmy');
        const role3 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'anime');
        const role4 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'historia i militaria');
        const role5 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'muzyka');
        if (!role0 || !role1 || !role2 || !role3 || !role4 || !role5) return await menu.reply.send(client.no + ' Niektóre role z sekcji `(' + menu.id + ')` nie istnieją, napisz do Administratora `' + menu.guild.name + '`', true);

        let one;
        if (menu.values[0]) one = `${menu.values[0]}`;
        if (menu.values[1]) one = `${menu.values[0]} ${menu.values[1]}`;
        if (menu.values[2]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]}`;
        if (menu.values[3]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]} ${menu.values[3]}`;
        if (menu.values[4]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]} ${menu.values[3]} ${menu.values[4]}`;
        if (menu.values[5]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]} ${menu.values[3]} ${menu.values[4]} ${menu.values[5]}`;
        if (menu.values[6]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]} ${menu.values[3]} ${menu.values[4]} ${menu.values[5]} ${menu.values[6]}`;

        if (one.includes('zabierz')) {
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          member.roles.remove(role5);
          return await menu.reply.send('<:peepoBlush:877617543932706836> Zabrano wszystkie role z sekcji **Zainteresowania**', true);
        }

        if (one.includes('sztuka-i-zdjecia')) {
          member.roles.add(role0);
        }
    
        if (one.includes('gry')) {
          member.roles.add(role1);
        }

        if (one.includes('ksiazki-i-filmy')) {
          member.roles.add(role2);
        }

        if (one.includes('anime')) {
          member.roles.add(role3);
        }

        if (one.includes('historia-i-militaria')) {
          member.roles.add(role4);
        }

        if (one.includes('muzyka')) {
          member.roles.add(role5);
        }

        await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano wybrane role`, true);
      };
      //
      if (menu.id === 'menu-dodatkowe') {
        const role0 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'czat nam umar');
        const role1 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'newsy');
        const role2 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === '( ͡° ͜ʖ ͡°)');
        const role3 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'cebulaq');
        const role4 = menu.guild.roles.cache.find(role => role.name.toLowerCase() === 'nauczyciel');
        if (!role0 || !role1 || !role2 || !role3 || !role4) return await menu.reply.send(client.no + ' Niektóre role z sekcji `(' + menu.id + ')` nie istnieją, napisz do Administratora `' + menu.guild.name + '`', true);

        let one;
        if (menu.values[0]) one = `${menu.values[0]}`;
        if (menu.values[1]) one = `${menu.values[0]} ${menu.values[1]}`;
        if (menu.values[2]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]}`;
        if (menu.values[3]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]} ${menu.values[3]}`;
        if (menu.values[4]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]} ${menu.values[3]} ${menu.values[4]}`;
        if (menu.values[5]) one = `${menu.values[0]} ${menu.values[1]} ${menu.values[2]} ${menu.values[3]} ${menu.values[4]} ${menu.values[5]}`;

        if (one.includes('zabierz')) {
          member.roles.remove(role0);
          member.roles.remove(role1);
          member.roles.remove(role2);
          member.roles.remove(role3);
          member.roles.remove(role4);
          return await menu.reply.send('<:peepoBlush:877617543932706836> Zabrano wszystkie role z sekcji **Dodatkowe**', true);
        }

        if (one.includes('czat-nam-umar')) {
          member.roles.add(role0);
        }
    
        if (one.includes('newsy')) {
          member.roles.add(role1);
        }

        if (one.includes('nsfw')) {
          member.roles.add(role2);
        }

        if (one.includes('cebulaq')) {
          member.roles.add(role3);
        }

        if (one.includes('nauczyciel')) {
          member.roles.add(role4);
        }

        await menu.reply.send(`<:peepoBlush:877617543932706836> Dodano wybrane role`, true);
      };
      //
      if (menu.id === 'menu-stan-konia') {

        if (menu.values[0] === 'zwalony') {
          await menu.reply.send('<:peepoBlush:877617543932706836>', true);
        }
    
        if (menu.values[0] === 'staly') {
          await menu.reply.send('<:peepoBlush:877617543932706836>', true);
        }

        if (menu.values[0] === 'kujawsko-pomorskie') {
          await menu.reply.send('<:peepoBlush:877617543932706836>', true);
        }

        if (menu.values[0] === 'alabama') {
          await menu.reply.send('<:peepoBlush:877617543932706836>', true);
        }
      }

        else {
            return;
        }

    } catch (err) {
        const embederr = new Discord.MessageEmbed()
        .setColor(client.cBlad)
        .setTitle('Błąd')
        .addField('Funkcja:', '```ClickMenu```', true)
        .addField('Użytkownik:', '```' + menu.clicker.user.tag + '```', true)
        .setFooter(`Jeżeli ten błąd się powtarza, napisz do nas! https://discord.gg/${client.invite}`)
        .setTimestamp();
        embederr.setDescription('```' + err.message + '```');
    
        try {
          menu.channel.send(embederr);
          embederr.setFooter(`gID: ${menu.guild.id}, gN: ${menu.guild.name}`, menu.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }) || client.av);
          return client.channels.cache.get(db.get('bot_errors_channel')).send(embederr);
        } catch (err) {
          return;
        }
      }
}
};