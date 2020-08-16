// Define discord stuff
const config = require('./config.json');
const Prefix = require("./prefix");
const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');

const d = new Date();
const n = d.getTime();
module.exports = n;

class ShadowBot extends AkairoClient {
    constructor() {
        super({
            ownerID: '476488167042580481'
        }, {
            disableMentions: 'everyone'
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: () => {
                return Prefix.getPrefix();
            },
            allowMention: true
        });

        this.inhibitorHandler = new InhibitorHandler(this, {
            directory: './inhibitors/'
        });

        this.listenerHandler = new ListenerHandler(this, {
            directory: './listeners/'
        });

        this.commandHandler.loadAll();
        this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
        this.inhibitorHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}

// Start!

const client = new ShadowBot();
client.login(config.token);
