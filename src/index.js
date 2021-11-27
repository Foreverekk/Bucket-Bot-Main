const { Client, Collection, Intents } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('./config.json');
require('discord-reply');
const client = new Client({
  disableMentions: "everyone",
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
});
require('discord-buttons')(client);

(async () => {
  client.commands = new Collection();
  client.events = new Map();
  client.prefix = config.prefix;
  client.owner = config.owner;
  client.test_guild = config.test_guild;
  client.yes = config.yes;
  client.no = config.no;
  client.eInfo = config.eInfo;
  client.eInfoo = config.eInfoo;
  client.cInfo = config.cInfo;
  client.cPoz = config.cPoz;
  client.cNeg = config.cNeg;
  client.cOstrz = config.cOstrz;
  client.cBlad = config.cBlad;
  client.cd = config.cd;
  client.cdemoji = config.cdemoji;
  client.pcd = config.pcd;
  client.invite = config.invite;
  client.madge = config.madge;
  client.sadge = config.sadge;
  client.sadeg = config.sadeg;
  client.poggers = config.poggers;
  client.ez = config.ez;
  client.clap = config.clap;
  client.porvalo = config.porvalo;
  client.twohead = config.twohead;
  client.fivehead = config.fivehead;
  client.av = config.av;
  client.bot_error = config.bot_error;
  client.bot_error_channel = config.bot_error_channel;
  client.errfooter = config.errfooter;
  client.locale = config.locale;
  const i18n = require('i18n');
  const { join } = require('path');
  i18n.configure({
    locales: ["ar", "de", "en", "es", "fr", "it", "ko", "nl", "pl", "pt_br", "ru", "sv", "th", "tr", "vi", "zh_cn", "zh_sg", "zh_tw"],
    directory: join(__dirname, "locales"),
    defaultLocale: "pl",
    retryInDefaultLocale: true,
    objectNotation: true,
    register: global,
  
    logWarnFn: function (msg) {
      console.log("warn", msg);
    },
  
    logErrorFn: function (msg) {
      console.log("error", msg);
    },
  
    missingKeyFn: function (locale, value) {
      return value;
    },
  
    mustacheConfig: {
      tags: ["{{", "}}"],
      disable: false
    }
  });
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);

})();