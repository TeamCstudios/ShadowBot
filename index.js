// Define discord stuff
const config = require('./config.json');
const Prefix = require("./prefix");
const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');

class ShadowBot extends AkairoClient {
    constructor() {
        super({
            ownerID: '116318819298967561'
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

        this.listenerHandler = new ListenerHandler(this, {
            directory: './listeners/'
        });

        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}

// Define bot startup thingies
let history = [];
const blacklist = [];
const d = new Date();
const n = d.getTime();
const dontlog = ["CahBot", "DuckHunt", "ShadowBot", "Shadow Bot"];

let ownerUser;


// Go for it
/*
bot.on('message', async (message) => {
    let i;
    let random;
    let argument;
    let commandline;
    if (prefix === undefined) {
        prefix = '!';
    }
    console.log('message detected');
    if(blacklist.includes(message.channel)) {
        return;
    }

    if (message.author.tag === "Mee6#0000" || message.author.tag === "GitHub#0000"){
        const reference = message.reference;
        const url = `https://discord.com/channels/${reference.guildID}/${reference.channelID}/${reference.messageID}`;
        ownerUser.send("Spy detected a message, investigate: " + url);
    }

    // Ignore Bots
    if(message.author.bot) {
        return;
    }

    // This statement makes sure that the message is a valid message, then adds it to memory.
    if (!dontlog.includes(message.author.username) && !message.content.startsWith(prefix)) {
        history.push(message.author.id + ': ' + message.content);
    }

    // Send history to owner
    if (message.content === prefix + 'retrieve-history' && message.author.id === owner) {
        message.channel.send("History retrieved!");
        let content = [];
        for(i = 0; i < history.length; i++){
            content.push(history[i] + "\n");
            if(i % 10 === 0 || i === history.length - 1 || (content + "").length > 1800){
                message.author.send(content);
                content = [];
            }
        }
    }

    //Blacklist a channel
    if (message.content.startsWith(prefix + "blacklist") && message.author.id === owner) {
        blacklist.push(message.channel);
        message.channel.send("I've blacklisted this channel. I will not respond to anything in the channel. However, I will still log this channel.")
    }

    // Grab a random quote from bot's memory.
    if (message.content === prefix + 'quote') {
        random = Math.floor(Math.random() * history.length);
        const hist = history[random];
        let auth = hist.split(' ')[0];
        auth = auth.replace('[', '');
        auth = auth.replace(']', '');
        auth = auth.replace(':', '');
        const id = auth;
        let user = await bot.users.fetch(auth);
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

    // Clear the History
    if (message.content === prefix + 'purgehistory' && message.author.id === owner) {
        history = [];
        console.log("History successfully purged.");
    }

    // Prune x items from the bot's history.
    if (message.content.startsWith(prefix + "prunehistory ")) {
        commandline = prefix + "prunehistory ";
        argument = message.content.substr(commandline.length);
        for (i = 0; i < argument; i++) {
            history.shift();
        }
        message.channel.send(argument + " items of history have been removed.");
    }

    // Return the bot's uptime in hours.
    if (message.content === prefix + 'uptime') {
        const x = new Date();
        const l = x.getTime();
        const uptime = l - n;
        const z = uptime / 1000 / 60 / 60;
        const zx = (Math.floor(z * 10000)) / 10000;
        message.reply("I have been up for " + zx + " hours.");
    }
})

*/

// Start!

const client = new ShadowBot();
client.login(config.token);
