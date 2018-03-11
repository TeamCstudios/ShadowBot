const Discord = require('discord.js');
const bot = new Discord.Client();
var history = [];
var prefix = "!";
bot.on('message', (message) => {
  if(prefix == undefined){
    prefix = '!';
  }
  console.log('message detected');
  if(message.author.username != "Shadow Bot" && message.content != prefix + "quote" &&
  message.content != prefix + "help" && message.content != "%&!prefix" &&
  message.content != prefix + "roll" && message.content != prefix + "coinflip"){
    history.push(message.author.username + ': ' + message.content);
  }
  // console.log(history);
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
  if(message.content == '%&!prefix %' && message.author.username == "MrJoCrafter"){
    message.channel.send("I've set the command prefix to % for you!");
  }else if(message.content == '%&!prefix %' && message.author.username == "MrJoCrafter"){
    prefix = "%";
    message.channel.send("I've set the prefix to " + prefix);
  }else if(message.content == '%&!prefix @' && message.author.username == "MrJoCrafter"){
    prefix = "@";
    message.channel.send("I've set the prefix to " + prefix);
  }else if(message.content == '%&!prefix #' && message.author.username == "MrJoCrafter"){
    prefix = "#";
    message.channel.send("I've set the prefix to " + prefix);
  }else if(message.content == '%&!prefix $' && message.author.username == "MrJoCrafter"){
    prefix = "$";
    message.channel.send("I've set the prefix to " + prefix);
  }else if(message.content == '%&!prefix |' && message.author.username == "MrJoCrafter"){
    prefix = "|";
    message.channel.send("I've set the prefix to " + prefix);
  }else if(message.content == '%&!prefix !' && message.author.username == "MrJoCrafter"){
    prefix = "!";
    message.channel.send("I've set the prefix to " + prefix);
  }else if(message.content == '%&!prefix' && message.author.username == "MrJoCrafter"){
    message.channel.send("Not a valid prefix. Please use @,#,$,%,|, or !");
  }
  //Reset the prefix to !
  if(message.content == '%&!reset' && message.author.username == "MrJoCrafter"){
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
    "\n" + "%&!prefix: Change the command prefix. (Owner Only)" +
    "\n" + "%&!reset: Reset the command prefix to ! . (Owner Only)"
    );
  }
})
bot.login('nope');
