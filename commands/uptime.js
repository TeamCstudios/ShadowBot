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

        const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(uptime / (1000 * 60 * 60));
        const minutes = Math.floor(uptime / (1000 * 60));
        const seconds = Math.floor(uptime / 1000);

        message.reply(`I have been up for ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);
    }
}

module.exports = UptimeCommand;