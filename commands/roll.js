const { Command } = require('discord-akairo');

class RollCommand extends Command {
    constructor() {
        super('roll', {
            aliases: ['roll'],
            args: [{
                    id: 'dice',
                    type: 'string',
                    default: '1d6'
            }]
        });
    }

    exec(message, args) {
        const argumentarray = args.dice.split("d");
        const dicerolled = Math.floor(parseInt(argumentarray[0]));
        const dicetype = Math.floor(parseInt(argumentarray[1]));
        let random = 0;
        for(let i = 0; i < dicerolled; i++){
            random = random + Math.floor(Math.random() * (dicetype + 1));
        }
        message.reply("You rolled " + dicerolled + " " + dicetype + "-sided dice, and your total is " + random + ".");
    }
}

module.exports = RollCommand;