const { Command } = require('discord-akairo');

class Bw2Command extends Command {
    constructor() {
        super('bw2', {
            aliases: ['bw2'],
        });
    }

    exec(message) {
        return message.reply("One day, a rant video appeared on Youtube called 'Team CStudios Rant' by a channel named JaredTheBagel. " +
            "'Jared' also stole several Team CStudios videos. " +
            "Like Bob, his real-life identity was found, but this didn't seem to stop his online activity. " +
            "After a second video, his activity mysteriously stopped, and he hasn't been seen again.");
    }
}

module.exports = Bw2Command;