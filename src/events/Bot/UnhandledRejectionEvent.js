const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class UnhandledRejectionEvent extends BaseEvent {
  constructor() {
    super('unhandledRejection');
  }
  
  async run (client, error) {
    console.error('Unhandled promise rejection');
  }
};