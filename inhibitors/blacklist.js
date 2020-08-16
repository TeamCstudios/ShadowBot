const Blacklist = require("../blacklist");
const { Inhibitor } = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
    constructor() {
        super('blacklist', {
            reason: 'blacklist'
        })
    }

    exec(message) {
        if(message.author.id === this.client.ownerID) {
            return false;
        }
        return Blacklist.get().includes(message.channel.id);
    }
}

module.exports = BlacklistInhibitor;