const Prefix = require("../prefix");
const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help'],
        });
    }

    exec(message) {
        return message.reply("```Commands:\n"
            + Prefix.getPrefix() + "help/info/commands: Show all commands.\n"
            + Prefix.getPrefix() + "quote: Quote a random message from this channel!\n"
            + Prefix.getPrefix() + "roll #dx: Roll # of x-sided dice. Example: '" + Prefix.getPrefix() + "roll 4d6' rolls 4 six-sided dice.\n"
            + Prefix.getPrefix() + "coinflip: Flip a coin.\n"
            + Prefix.getPrefix() + "define [word]: Define a word.\n"
            + Prefix.getPrefix() + "urban [word]: Define a word using Urban Dictionary.\n"
            + Prefix.getPrefix() + "repo: Link the repo.\n"
            + Prefix.getPrefix() + "join: Send server join link.\n"
            + Prefix.getPrefix() + "history: Show history commands.\n"
            + Prefix.getPrefix() + "uptime: Show uptime.\n"
            + Prefix.getPrefix() + "blacklist: Stop bot from responding in a channel. (Owner Only)\n"
            + Prefix.getPrefix() + "retrieve-history: Send memory to owner (Owner Only)\n"
            + Prefix.getPrefix() + "prunehistory [x]: Delete the first x item(s) of history (Owner Only)\n"
            + Prefix.getPrefix() + "purgehistory: Delete all of history (Owner Only)\n" +
            "%&!prefix [prefix]: Change the command prefix. (Owner Only)\n" +
            "%&!reset: Reset the command prefix to !. (Owner Only)```");
    }
}

module.exports = HelpCommand;