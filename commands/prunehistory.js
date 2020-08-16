const Log = require("../log");
const { Command } = require('discord-akairo');

class PruneHistoryCommand extends Command {
    constructor() {
        super('prunehistory', {
            aliases: ['prunehistory'],
            ownerOnly: true,
            args: [{
                id: 'argument',
                type: 'number',
                default: ''
            }]
        });
    }

    exec(message, args) {
        for (let i = 0; i < args.argument; i++) {
            Log.get().shift();
        }
        message.channel.send(args.argument + " items of history have been removed.");
    }
}

module.exports = PruneHistoryCommand;