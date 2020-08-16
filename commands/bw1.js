const { Command } = require('discord-akairo');

class Bw1Command extends Command {
    constructor() {
        super('bw1', {
            aliases: ['bw1'],
        });
    }

    exec(message) {
        return message.reply("One day, BobTheBagel joined an IRC chat. " +
            "Soon, he became a menace to certain Minecraft servers. " +
            "He also did nasty things, such as \"dating\" a 9 year old. " +
            "Eventually, the person who made BobTheBagel was discovered. " +
            "Bob has never really stopped, but isn't much of a threat anymore."
        );
    }
}

module.exports = Bw1Command;