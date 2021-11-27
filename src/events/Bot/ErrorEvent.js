const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ErrorEvent extends BaseEvent {
  constructor() {
    super('error');
  }
  
  async run (client, warn) {
    console.error('Warn:', warn);
  }
};