const Prefix = require("../prefix");
const Log = require("../log");
const { Listener } = require('discord-akairo');

const dontlog = ["CahBot", "DuckHunt", "ShadowBot", "Shadow Bot"];

class MessageListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message'
        });
    }

    exec(message) {
        // Ignore Bots
        if(message.author.bot) {
            return;
        }

        console.log("Message spotted")
        if(!dontlog.includes(message.author.username) && !message.content.startsWith(Prefix.getPrefix())) {
            Log.add(message.author.id + ': ' + message.content);
        }
    }
}

module.exports = MessageListener;