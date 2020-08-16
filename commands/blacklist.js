const Blacklist = require("../blacklist");
const { Command } = require('discord-akairo');

class BlacklistCommand extends Command {
    constructor() {
        super('blacklist', {
            aliases: ['blacklist'],
            ownerOnly: true
        });
    }

    exec(message, args) {
        Blacklist.add(message.channel.id);
        message.channel.send("I've blacklisted this channel. I will not respond to anything in the channel, however I will still log this channel.")
    }
}

module.exports = BlacklistCommand;