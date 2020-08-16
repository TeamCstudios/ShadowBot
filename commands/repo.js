const { Command } = require('discord-akairo');

class RepoCommand extends Command {
    constructor() {
        super('repo', {
            aliases: ['repo', 'repository'],
        });
    }

    exec(message) {
        return message.reply("<https://github.com/TeamCstudios/ShadowBot>");
    }
}

module.exports = RepoCommand;