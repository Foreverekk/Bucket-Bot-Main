const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class WarnEvent extends BaseEvent {
  constructor() {
    super('warn');
  }
  
  async run (client, warn) {
    console.error('Warn:', warn);
  }
};