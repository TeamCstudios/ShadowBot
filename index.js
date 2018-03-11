const Discord = require('discord.js');
const bot = new Discord.Client();
var history = [];
var prefix = "!";
bot.on('message', (message) => {
  if(prefix == undefined){
    prefix = '!';
  }
  console.log('message detected');
  if(message.author.username != "DuckHunt" && message.author.username != "Shadow Bot" && message.content != prefix + "quote" &&
  message.content != prefix + "help" && !message.content.startsWith("%&!prefix ") && message.content != "%&!reset" &&
  message.content != "%&!resetprefix" && message.content != prefix + "roll" && message.content != prefix + "coinflip" &&
  !message.content.startsWith(prefix + "define") && message.content != prefix + "history" && message.content != prefix + "repo" &&
  message.content != prefix + "repository" && message.content != prefix + "join" && message.content != prefix + "joinserver"){
    history.push(message.author.username + ': ' + message.content);
  }

  //send history to owner
  if(message.content == prefix + 'history' && message.author.username == "MrJoCrafter"){
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
  if(message.content == prefix + 'roll'){
    var random = Math.floor(Math.random() * 6) + 1;
    message.reply('You rolled a ' + random);
  }

  //Change the prefix
  if (message.content.startsWith("%&!prefix ")){
        var commandline = "%&!prefix ";
        var argument = message.content.substr(commandline.length);
        prefix = argument;
        message.channel.send("I've set the prefix to " + prefix + " If you messed up, do %&!reset");
  }

  //Reset the prefix to !
  if(message.content == '%&!reset' || message.content == '%&!resetprefix' && message.author.username == "MrJoCrafter"){
    prefix = '!';
    message.channel.send("I've reset the command prefix to ! for you!");
  }

  //Random quote from bot's memory.
  if(message.content == prefix + 'quote'){
    var messages = history.length;
    var random = Math.floor(Math.random() * messages);
    message.channel.send(history[random]);
  }

  //Show all commands
  if(message.content == prefix + 'help'){
    message.reply("\n" + "Commands:" +
    "\n" + prefix + "help: Show all commands." +
    "\n" + prefix + "quote: Quote a random message from this channel!" +
    "\n" + prefix + "roll: Roll a dice." +
    "\n" + prefix + "coinflip: Flip a coin." +
    "\n" + prefix + "define [word]: Define a word." +
    "\n" + prefix + "repo: Link the repo." +
    "\n" + prefix + "join: Send server join link." +
    "\n" + prefix + "history: Send memory to owner (Owner Only)" +
    "\n" + "%&!prefix [prefix]: Change the command prefix. (Owner Only)" +
    "\n" + "%&!reset: Reset the command prefix to ! . (Owner Only)"
    );
  }
})
bot.login('');
