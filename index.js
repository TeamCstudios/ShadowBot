// Define discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

// Define bot startup thingies
const owner = "MrJoCrafter#4310";
var admins = [];
var history = [];
var blacklist = [];
var prefix = "|";
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
  if (message.content == prefix + 'retrieve-history' && (message.author.tag == owner || admins.includes(message.author.tag))) {
    message.channel.send("History retrieved!");
    for(i = 0; i < history.length; i++){
      message.author.send(history[i]);
    }
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
    var random = dicerolled * (Math.floor(Math.random() * dicetype) + 1);
    message.reply("You rolled " + dicerolled + " " + dicetype + "-sided dice, and your total is " + random + ".");
  }
  if (!message.content.startsWith(prefix)){
    var test1 = message.content.split(" Dhalla ");
    if (test1.length > 1){
      message.channel.send("Praise be to Dr. Dhalla.");
    }
    var test2 = message.content.split("ColtBot");
    if (test2.length > 1){
      message.channel.send("Yes? What do you want. Use " + prefix + "help to see all commands.");
    }
    var test3 = message.content.split("heck");
    if (test3.length > 1){
      message.channel.send("No swearing on this christian server, please.");
    }
  }

  // Change the prefix
  if (message.content.startsWith("ColtBot prefix ") && (message.author.tag == owner || admins.includes(message.author.tag))) {
    var commandline = "ColtBot prefix ";
    var argument = message.content.substr(commandline.length);
    prefix = argument;
    message.channel.send("I've set the prefix to " + prefix + " If you messed up, do %&!reset");
  }

  //Blacklist a channel
  if (message.content.startsWith(prefix + "blacklist") && (message.author.tag == owner || admins.includes(message.author.tag))) {
    blacklist.push(message.channel);
    message.channel.send("I've blacklisted this channel. I will not respond to anything in the channel. However, I will still log this channel.")
  }

  // Reset the prefix to !
  if (message.content == 'ColtBot reset' || message.content == 'ColtBot resetprefix') {
    if ((message.author.tag == owner || admins.includes(message.author.tag))) {
      prefix = '|';
      message.channel.send("I've reset the command prefix to | for you!");
    }
  }

  // Clear the History
  if (message.content == prefix + 'purgehistory' && (message.author.tag == owner || admins.includes(message.author.tag))) {
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
    message.reply("bot not done yet.");
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
