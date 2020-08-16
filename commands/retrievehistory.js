const Log = require("../log");
const { Command } = require('discord-akairo');

class RetrieveHistoryCommand extends Command {
    constructor() {
        super('retrieve-history', {
            aliases: ['retrieve-history'],
            ownerOnly: true
        });
    }

    exec(message, args) {
        message.channel.send("History retrieved!");
        let content = [];
        for(let i = 0; i < Log.get().length; i++){
            content.push(Log.get()[i] + "\n");
            if(i % 10 === 0 || i === Log.get().length - 1 || (content + "").length > 1800){
                message.author.send(content);
                content = [];
            }
        }
    }
}

module.exports = RetrieveHistoryCommand;