const Prefix = require("../prefix");
const { Command } = require('discord-akairo');

class ResetCommand extends Command {
    constructor() {
        super('reset', {
            aliases: ['reset', 'resetprefix'],
            ownerOnly: true,
            prefix: '%&!'
        });
    }

    exec(message, args) {
        message.reply("I've reset the command prefix to `!` for you!");
        Prefix.setPrefix("!");
    }
}

module.exports = ResetCommand;