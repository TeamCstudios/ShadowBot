const { Command } = require('discord-akairo');

class CoinFlipCommand extends Command {
    constructor() {
        super('coinflip', {
            aliases: ['coinflip']
        });
    }

    exec(message) {
        let random = Math.floor(Math.random() * 2) + 1;
        if (random === 1) {
            random = 'heads';
        } else {
            random = 'tails';
        }
        return message.reply('Your coin landed on ' + random);
    }
}

module.exports = CoinFlipCommand;