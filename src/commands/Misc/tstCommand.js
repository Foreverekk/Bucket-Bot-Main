const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class tstCommand extends BaseCommand {
  constructor() {
    super('tst', 'other', []);
  }
    
  async run(client, message, args, AV, CMD, PREFIX, embederr) {
    const Discord = require("discord.js");
    const db = require("quick.db");

    message.send('123');
    }
    };