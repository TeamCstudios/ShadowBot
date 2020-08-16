const Log = require("../log");
const { Command } = require('discord-akairo');

class QuoteCommand extends Command {
    constructor() {
        super('quote', {
            aliases: ['quote'],
        });
    }

    async exec(message) {
        const random = Math.floor(Math.random() * Log.get().length);
        const hist = Log.get()[random];
        let auth = hist.split(' ')[0];
        auth = auth.replace('[', '');
        auth = auth.replace(']', '');
        auth = auth.replace(':', '');
        let user = await this.client.users.fetch(auth);
        let msg = hist.split(':');
        msg.splice(0,1);
        msg = msg.join(":");
        msg = msg.substring(1);
        const iconURL = user.avatarURL();
        const embed = {
            "title": "Quote",
            "description": msg,
            "color": 2729288,
            // "timestamp": ,
            "author": {
                "name": user.tag,
                "icon_url": iconURL
            }
            //"fields": []
        };
        message.channel.send({embed});
    }
}

module.exports = QuoteCommand;