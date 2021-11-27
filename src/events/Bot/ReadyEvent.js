const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }

  async run (client) {
    console.log('Zalogowano jako ' + client.user.tag + '!');

    setInterval(function() {
      try {
      let statusy = [
        "1", "2", "3", "4", "5", "6", "7", "7", "8", "8", "9", "9"
      ];
      let status = statusy[Math.floor(Math.random() * statusy.length)];
      if (status === "1") {
        client.user.setActivity("Rudy śmi*ć", { type: "STREAMING", url: "https://www.twitch.tv/rudy_szef" }).catch(console.error);
      }
      if (status === "2") {
        client.user.setActivity("cię pod prysznicem", { type: "WATCHING" }).catch(console.error);
      }
      if (status === "3") {
        client.user.setActivity("Jeb*ć Ulane K*rwy", { type: "PLAYING" }).catch(console.error);
      }
      if (status === "4") {
        client.user.setActivity("JG", { type: "WATCHING" }).catch(console.error);
      }
      if (status === "5") {
        client.user.setActivity("Cripu ma małego o:", { type: "WATCHING" }).catch(console.error);
      }
      if (status === "6") {
        client.user.setActivity("Kazik to ped*ł o:", { type: "WATCHING" }).catch(console.error);
      }
      if (status === "7") {
        client.user.setActivity("@Bucket", { type: "STREAMING", url: "https://www.twitch.tv/rudy_szef" }).catch(console.error);
      }
      if (status === "8") {
        client.user.setActivity("Przyjaciół: " + client.users.cache.size, { type: "STREAMING", url: "https://www.twitch.tv/rudy_szef" }).catch(console.error);
      }
      if (status === "9") {
        client.user.setActivity(client.prefix, { type: "WATCHING" }).catch(console.error);
      }
    } catch (err) {
      return console.log(err);
    }
    }, 40000);//(40s)
  }
};