module.exports = class BaseCommand {
  constructor(name, category, aliases, premium) {
    this.name = name;
    this.category = category;
    this.aliases = aliases;
    this.premium = premium;
  }
}