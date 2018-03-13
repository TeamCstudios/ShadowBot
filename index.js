const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const owner = "MrJoCrafter";
var history = [];
var prefix = "!";
var d = new Date();
var n = d.getTime();
bot.on('ready', () => {
  console.log("It has been " + n + " milliseconds since Jan 1, 1970.");
  console.log("No errors found during boot process.");
});
bot.on('message', (message) => {
  if(prefix == undefined){
    prefix = '!';
  }
  console.log('message detected');

  //This statement makes sure that the message is a valid message, then adds it to memory.
  if(message.author.username != "DuckHunt" && message.author.username != "ShadowBot" && message.author.username != "Shadow Bot" &&
  message.content != prefix + "quote" && message.content != prefix + "help" && !message.content.startsWith("%&!prefix ") &&
  message.content != "%&!reset" && message.content != "%&!resetprefix" && !message.content.startsWith(prefix + "roll") &&
  message.content != prefix + "coinflip" && !message.content.startsWith(prefix + "urban") &&
  !message.content.startsWith(prefix + "define") && message.content != prefix + "history" && message.content != prefix + "repo" &&
  message.content != prefix + "repository" && message.content != prefix + "uptime" && message.content != prefix + "join" && message.content != prefix + "joinserver"){
    history.push(message.author.username + ': ' + message.content);
  }

  //send history to owner
  if(message.content == prefix + 'history' && message.author.username == owner){
    message.channel.send("History retrieved!");
    message.author.send(history);
  }

  //join a server
  if(message.content == prefix + 'join' || message.content == prefix + 'joinserver'){
    message.channel.send("Use this link: https://discordapp.com/oauth2/authorize?client_id=421838962236063745&scope=bot&permissions=2146958591");
  }

  //link the repo
  if(message.content == prefix + 'repo' || message.content == prefix + 'repository'){
    message.channel.send("https://github.com/TeamCstudios/ShadowBot");
  }
  //Define a word using urbandictionary
  if (message.content.startsWith(prefix + "urban ")){
        var commandline = prefix + "urban ";
        var argument = message.content.substr(commandline.length);
        message.channel.send("https://www.urbandictionary.com/define.php?term=" + argument);
  }
  //Define a word
  if (message.content.startsWith(prefix + "define ")){
        var commandline = prefix + "define ";
        var argument = message.content.substr(commandline.length);
        message.channel.send("https://www.merriam-webster.com/dictionary/" + argument);
  }

  //Flip a coin.
  if(message.content == prefix + 'coinflip'){
    var random = Math.floor(Math.random() * 2) + 1;
    if(random == 1){
      random = 'heads';
    }else{
      random = 'tails';
    }
    message.reply('Your coin landed on ' + random);
  }

  //Roll a dice.
  if(message.content.startsWith(prefix + "roll ")){
    var commandline = prefix + "roll ";
    var commandcut = message.content.substr(commandline.length);
    var argumentarray = commandcut.split("d");
    var dicerolled = Math.floor(argumentarray[0]);
    var dicetype = Math.floor(argumentarray[1]);
    var random = dicerolled * (Math.floor(Math.random() * dicetype) + 1);
    message.reply("You rolled " + dicerolled + " " + dicetype + "-sided dice, and your total is " + random + ".");
  }

  //Change the prefix
  if (message.content.startsWith("%&!prefix ")){
        var commandline = "%&!prefix ";
        var argument = message.content.substr(commandline.length);
        prefix = argument;
        message.channel.send("I've set the prefix to " + prefix + " If you messed up, do %&!reset");
  }

  //Reset the prefix to !
  if(message.content == '%&!reset' || message.content == '%&!resetprefix' && message.author.username == owner){
    prefix = '!';
    message.channel.send("I've reset the command prefix to ! for you!");
  }

  //Random quote from bot's memory.
  if(message.content == prefix + 'quote'){
    var messages = history.length;
    var random = Math.floor(Math.random() * messages);
    message.channel.send(history[random]);
  }

  //Clear History
  if(message.content == prefix + 'purgehistory' && message.author.username == owner){
    history = [];
    console.log("History successfully purged.");
  }

  //Prune x items from from history.
  if (message.content.startsWith(prefix + "prunehistory ")){
        var commandline = prefix +"prunehistory ";
        var argument = message.content.substr(commandline.length);
        for(i = 0; i < argument; i++){
          history.shift();
        }
        message.channel.send(argument + " items of history have been removed.");
  }

  //Show all commands
  if(message.content == prefix + 'help'){
    message.reply("\n" + "Commands:" +
    "\n" + prefix + "help: Show all commands." +
    "\n" + prefix + "quote: Quote a random message from this channel!" +
    "\n" + prefix + "roll #dx: Roll # of x-sided dice. Example: '" + prefix + "roll 4d6' rolls 4 six-sided dice." +
    "\n" + prefix + "coinflip: Flip a coin." +
    "\n" + prefix + "define [word]: Define a word." +
    "\n" + prefix + "urban [word]: Define a word using Urban Dictionary." +
    "\n" + prefix + "repo: Link the repo." +
    "\n" + prefix + "join: Send server join link." +
    "\n" + prefix + "uptime: Show uptime." +
    "\n" + prefix + "history: Send memory to owner (Owner Only)" +
    "\n" + prefix + "prunehistory [x]: Delete the first x item(s) of history (Owner Only)" +
    "\n" + prefix + "purgehistory: Delete all of history (Owner Only)" +
    "\n" + "%&!prefix [prefix]: Change the command prefix. (Owner Only)" +
    "\n" + "%&!reset: Reset the command prefix to ! . (Owner Only)"
    );
  }
  if(message.content == prefix + 'uptime'){
    var x = new Date();
    var l = x.getTime();
    var uptime = l-n;
    var z = uptime/1000/60/60;
    var zx = (Math.floor(z*10000))/10000;
    message.reply("I have been up for " + zx + " hours.");
  }
  if(Math.random() > .93){
    message.author.send("Do you own a server? If so, add me to it using this link: https://discordapp.com/oauth2/authorize?client_id=421838962236063745&scope=bot&permissions=2146958591");
    console.log("Advertisement Type 1 has been sent to " + message.author.username);
  }
  if(Math.random() > .97){
    message.author.send("Do you have any problems with this bot? If so, please report them here: https://github.com/TeamCstudios/ShadowBot/issues");
    console.log("Advertisement Type 2 has been sent to " + message.author.username);
  }

})
bot.login(config.token);
