const Prefix = require("../prefix");
const { Command } = require('discord-akairo');

class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix'],
            args: [{
                id: 'newPrefix',
                type: 'string',
                default: '!'
            }],
            ownerOnly: true,
            prefix: '%&!'
        });
    }

    exec(message, args) {
        message.reply("I've set the prefix to " + args.newPrefix + " If you messed up, do `%&!reset`");
        Prefix.setPrefix(args.newPrefix);
    }
}

module.exports = PrefixCommand;