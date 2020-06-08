// Define discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

// Define bot startup thingies
const owner = "MrJoCrafter#4310";
var history = [];
var blacklist = [];
var prefix = "!";
var d = new Date();
var n = d.getTime();
const dontlog = ["CahBot", "DuckHunt", "ShadowBot", "Shadow Bot"];

// Prepare bot
bot.on('ready', () => {
  console.log("It has been " + n + " milliseconds since Jan 1, 1970.");
  console.log("No errors found during boot process.");
  console.log("Welcome, " + owner + ".");
  console.log("I am currently using token " + config.token + ".");
});

// Go for it
bot.on('message', (message) => {
  if (prefix == undefined) {
    prefix = '!';
  }
  console.log('message detected');
if(!blacklist.includes(message.channel)){
  // This statement makes sure that the message is a valid message, then adds it to memory.
  if (!dontlog.includes(message.author.username) && !message.content.startsWith(prefix)) {
    history.push(message.author.id + ': ' + message.content);
  }

  // Send history to owner
  if (message.content == prefix + 'retrieve-history' && message.author.tag == owner) {
    message.channel.send("History retrieved!");
    var content = [];
    for(i = 0; i < history.length; i++){
      content.push(history[i] + "\n");
      if(i % 10 == 0 || i == history.length - 1 || (content + "").length() > 1800){
        message.author.send(content);
        content = [];
      }
    }
  }

  if (message.author.tag == "Mee6#0000" || message.author.tag == "GitHub#0000"){
    owner.send(message);
  }

  // Send an invite bot to the link.
  if (message.content == prefix + 'join' || message.content == prefix + 'joinserver') {
    message.channel.send("Use this link: <https://discordapp.com/api/oauth2/authorize?client_id=421838962236063745&permissions=8&scope=bot>");
  }

  // Send a link to the repository.
  if (message.content == prefix + 'repo' || message.content == prefix + 'repository') {
    message.channel.send("<https://github.com/TeamCstudios/ShadowBot>");
  }

  // Define a word using urbandictionary
  if (message.content.startsWith(prefix + "urban ")) {
    var commandline = prefix + "urban ";
    var argument = message.content.substr(commandline.length);
    message.channel.send("https://www.urbandictionary.com/define.php?term=" + argument);
  }

  // Define a word using merriam-webster
  if (message.content.startsWith(prefix + "define ")) {
    var commandline = prefix + "define ";
    var argument = message.content.substr(commandline.length);
    message.channel.send("https://www.merriam-webster.com/dictionary/" + argument);
  }

  // Flip a coin.
  if (message.content == prefix + 'coinflip') {
    var random = Math.floor(Math.random() * 2) + 1;
    if (random == 1) {
      random = 'heads';
    } else {
      random = 'tails';
    }
    message.reply('Your coin landed on ' + random);
  }

  // Roll a dice.
  if (message.content.startsWith(prefix + "roll ")) {
    var commandline = prefix + "roll ";
    var commandcut = message.content.substr(commandline.length);
    var argumentarray = commandcut.split("d");
    var dicerolled = Math.floor(argumentarray[0]);
    var dicetype = Math.floor(argumentarray[1]);
    var random;
    for(var i = 0; i < dicerolled; i++){
      random+= (Math.round(Math.random(1,dicetype));
    }
    message.reply("You rolled " + dicerolled + " " + dicetype + "-sided dice, and your total is " + random + ".");
  }

  // Change the prefix
  if (message.content.startsWith("%&!prefix ") && message.author.tag == owner) {
    var commandline = "%&!prefix ";
    var argument = message.content.substr(commandline.length);
    prefix = argument;
    message.channel.send("I've set the prefix to " + prefix + " If you messed up, do %&!reset");
  }

  //Blacklist a channel
  if (message.content.startsWith(prefix + "blacklist") && message.author.tag == owner) {
    blacklist.push(message.channel);
    message.channel.send("I've blacklisted this channel. I will not respond to anything in the channel. However, I will still log this channel.")
  }

  // Reset the prefix to !
  if (message.content == '%&!reset' || message.content == '%&!resetprefix') {
    if (message.author.tag == owner) {
      prefix = '!';
      message.channel.send("I've reset the command prefix to ! for you!");
    }
  }

  // Send a memerator meme
  if (message.content == prefix + 'memerator') {
    message.channel.send("Not ready yet.");
  }

  //history commands
  if (message.content == prefix + 'history') {
    message.channel.send("```\n" + prefix + "bw1: Story of Bagel War I.\n" + prefix + "bw2: Story of Bagel War II." + "\n```");
  }

  if (message.content == prefix + 'bw1') {
    message.channel.send("One day, BobTheBagel joined an IRC chat. Soon, he became a menace to certain Minecraft servers. He also did nasty things, such as ''dating'' a 9 year old. Eventually, the person who made BobTheBagel was discovered. Bob has never really stopped, but isn't much of a threat anymore.");
  }
  if (message.content == prefix + 'bw2') {
    message.channel.send("One day, a rant video appeared on Youtube called 'Team CStudios Rant' by a channel named JaredTheBagel. 'Jared' also stole several Team CStudios videos. Like Bob, his real-life identity was found, but this didn't seem to stop his online activity. After a second video, his activity mysteriously stopped, and he hasn't been seen again.");
  }
  // Grab a random quote from bot's memory.
  if (message.content == prefix + 'quote') {
    var messages = history.length;
    var random = Math.floor(Math.random(0,history.length));
    var hist = history[random];
    var auth = hist.split(' ')[0];
    auth = auth.replace('[', '');
    auth = auth.replace(']', '');
    auth = auth.replace(':', '');
    var id = auth;
    auth = bot.users.get(auth);
    var msg = hist.split(':');
    msg.splice(0,1);
    msg = msg.join(":");
    msg = msg.substring(1);
    var iconURL = `https://cdn.discordapp.com/avatars/${id}/${auth.avatar}.webp?size=1024`;
    var embed = {
      "title": "Quote",
      "description": msg,
      "color": 2729288,
      //"timestamp": new Date(),
      "author": {
        "name": auth.tag,
        "icon_url": iconURL
      }
      //"fields": []
    };
    message.channel.send({embed});
  }

  // Clear the History
  if (message.content == prefix + 'purgehistory' && message.author.tag == owner) {
    history = [];
    console.log("History successfully purged.");
  }

  // Prune x items from the bot's history.
  if (message.content.startsWith(prefix + "prunehistory ")) {
    var commandline = prefix + "prunehistory ";
    var argument = message.content.substr(commandline.length);
    for (i = 0; i < argument; i++) {
      history.shift();
    }
    message.channel.send(argument + " items of history have been removed.");
  }

  // Show all commands
  if (message.content == prefix + 'help' || message.content == prefix + 'info' || message.content == prefix + 'commands') {
    message.reply("```\n" + "Commands:" + "\n" + prefix + "help/info/commands: Show all commands." + "\n" + prefix + "quote: Quote a random message from this channel!" + "\n" + prefix + "roll #dx: Roll # of x-sided dice. Example: '" + prefix + "roll 4d6' rolls 4 six-sided dice." + "\n" + prefix + "coinflip: Flip a coin." + "\n" + prefix + "define [word]: Define a word." + "\n" + prefix + "urban [word]: Define a word using Urban Dictionary." + "\n" + prefix + "repo: Link the repo." + "\n" + prefix + "join: Send server join link." + "\n" + prefix + "history: Show history commands." + "\n" + prefix + "memerator: Show a random memerator meme." + "\n" + prefix + "uptime: Show uptime." + "\n" + prefix + "blacklist: Stop bot from responding in a channel. (Owner Only)" + "\n" + prefix + "retrieve-history: Send memory to owner (Owner Only)" + "\n" + prefix + "prunehistory [x]: Delete the first x item(s) of history (Owner Only)" + "\n" + prefix + "purgehistory: Delete all of history (Owner Only)" + "\n" + "%&!prefix [prefix]: Change the command prefix. (Owner Only)" + "\n" + "%&!reset: Reset the command prefix to !. (Owner Only)```");
  }

  // Return the bot's uptime in hours.
  if (message.content == prefix + 'uptime') {
    var x = new Date();
    var l = x.getTime();
    var uptime = l - n;
    var z = uptime / 1000 / 60 / 60;
    var zx = (Math.floor(z * 10000)) / 10000;
    message.reply("I have been up for " + zx + " hours.");
  }
}
})

// Start!
bot.login(config.token);
