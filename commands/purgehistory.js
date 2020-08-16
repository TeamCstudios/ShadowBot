const Log = require("../log");
const { Command } = require('discord-akairo');

class PurgeHistoryCommand extends Command {
    constructor() {
        super('purgehistory', {
            aliases: ['purgehistory'],
            ownerOnly: true,
            prefix: '%&!'
        });
    }

    exec(message, args) {
        Log.clear();
        message.reply("History successfully purged.");
    }
}

module.exports = PurgeHistoryCommand;