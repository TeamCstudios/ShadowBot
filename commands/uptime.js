const n = require("../index");
const { Command } = require('discord-akairo');

class UptimeCommand extends Command {
    constructor() {
        super('uptime', {
            aliases: ['uptime']
        });
    }

    exec(message, args) {
        const x = new Date();
        const l = x.getTime();
        const uptime = l - n;
        const z = uptime / 1000 / 60 / 60;
        const zx = (Math.floor(z * 10000)) / 10000;
        message.reply("I have been up for " + zx + " hours.");
    }
}

module.exports = UptimeCommand;