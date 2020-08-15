const Prefix = require("../prefix");
const { Command } = require('discord-akairo');

class HistoryCommand extends Command {
    constructor() {
        super('history', {
            aliases: ['history'],
        });
    }

    exec(message) {
        return message.reply("```" + Prefix.getPrefix() + "bw1: Story of Bagel War I.\n"
            + Prefix.getPrefix() + "bw2: Story of Bagel War II." + "```");
    }
}

module.exports = HistoryCommand;