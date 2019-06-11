// Define discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

// Define bot startup thingies
const owner = "MrJoCrafter#4310";
var history = [];
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

  // This statement makes sure that the message is a valid message, then adds it to memory.
  if (!dontlog.includes(message.author.username) && !message.content.startsWith(prefix)) {
    history.push(message.author.id + ': ' + message.content);
  }

  // Send history to owner
  if (message.content == prefix + 'history' && message.author.tag == owner) {
    message.channel.send("History retrieved!");
    var hisarray = history.split("\n",30000);
    for(i = 0; i < hisarray.length(); i++){
      message.author.send(hisarray[i]);
    }
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
    var random = dicerolled * (Math.floor(Math.random() * dicetype) + 1);
    message.reply("You rolled " + dicerolled + " " + dicetype + "-sided dice, and your total is " + random + ".");
  }
  if (!message.content.startsWith(prefix)){
    var test1 message.content.split("peepo");
    if (test1.length() > 0){
      message.author.send("Peepo.");
    }
    var test2 message.content.split("ShadowBot");
    if (test2.length() > 0){
      message.author.send("Yes? What do you want.");
    }
    var test3 message.content.split("MrJoCrafter");
    if (test3.length() > 0){
      message.author.send("Please @ mention him.");
    }
    var test4 message.content.split("heck");
    if (test4.length() > 0){
      message.author.send("No swearing on this christian server, please.");
    }
  }

  // Change the prefix
  if (message.content.startsWith("%&!prefix ") && message.author.tag == owner) {
    var commandline = "%&!prefix ";
    var argument = message.content.substr(commandline.length);
    prefix = argument;
    message.channel.send("I've set the prefix to " + prefix + " If you messed up, do %&!reset");
  }

  // Reset the prefix to !
  if (message.content == '%&!reset' || message.content == '%&!resetprefix') {
    if (message.author.tag == owner) {
      prefix = '!';
      message.channel.send("I've reset the command prefix to ! for you!");
    }
  }

  // Grab a random quote from bot's memory.
  if (message.content == prefix + 'quote') {
    var messages = history.length;
    var random = Math.floor(Math.random() * messages);
    var hist = history[random];
    var auth = hist.split(' ')[0];
    auth = auth.replace('[', '');
    auth = auth.replace(']', '');
    auth = auth.replace(':', '')
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
    message.reply("```\n" + "Commands:" + "\n" + prefix + "help/info/commands: Show all commands." + "\n" + prefix + "quote: Quote a random message from this channel!" + "\n" + prefix + "roll #dx: Roll # of x-sided dice. Example: '" + prefix + "roll 4d6' rolls 4 six-sided dice." + "\n" + prefix + "coinflip: Flip a coin." + "\n" + prefix + "define [word]: Define a word." + "\n" + prefix + "urban [word]: Define a word using Urban Dictionary." + "\n" + prefix + "repo: Link the repo." + "\n" + prefix + "join: Send server join link." + "\n" + prefix + "uptime: Show uptime." + "\n" + prefix + "history: Send memory to owner (Owner Only)" + "\n" + prefix + "prunehistory [x]: Delete the first x item(s) of history (Owner Only)" + "\n" + prefix + "purgehistory: Delete all of history (Owner Only)" + "\n" + "%&!prefix [prefix]: Change the command prefix. (Owner Only)" + "\n" + "%&!reset: Reset the command prefix to !. (Owner Only)```");
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
})

// Start!
bot.login(config.token);
