const { Command } = require('discord-akairo');

class JoinCommand extends Command {
    constructor() {
        super('join', {
            aliases: ['join', 'joinserver'],
        });
    }

    exec(message) {
        return message.reply("Use this link: <https://discord.com/api/oauth2/authorize?client_id=421838962236063745&permissions=8&scope=bot>");
    }
}

module.exports = JoinCommand;