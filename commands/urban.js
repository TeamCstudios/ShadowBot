const { Command } = require('discord-akairo');

class UrbanCommand extends Command {
    constructor() {
        super('urban', {
            aliases: ['urban'],
            args: [{
                id: 'input',
                type: 'string',
                default: ''
            }]
        });
    }

    exec(message, args) {
        message.reply("https://www.urbandictionary.com/define.php?term=" + args.input);
    }
}

module.exports = UrbanCommand;