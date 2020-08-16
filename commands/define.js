const { Command } = require('discord-akairo');

class DefineCommand extends Command {
    constructor() {
        super('define', {
            aliases: ['define'],
            args: [{
                id: 'input',
                type: 'string',
                default: ''
            }]
        });
    }

    exec(message, args) {
        message.reply("https://www.merriam-webster.com/dictionary/" + args.input);
    }
}

module.exports = DefineCommand;