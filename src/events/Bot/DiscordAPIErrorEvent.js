const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class DiscordAPIErrorEvent extends BaseEvent {
  constructor() {
    super('discordAPIError');
  }
  
  async run (client, error) {
    console.error('dc');
  }
};