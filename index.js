const Discord = require('discord.js');
const bot = new Discord.Client();
var history = [];
bot.on('message', (message) => {
  console.log('message detected');
  if(message.author.username != "Shadow Bot" && message.content != "!quote" && message.content != "!help" &&
  message.content != "!roll" && message.content != "!coinflip"){
    history.push(message.author.username + ': ' + message.content);
  }
  // console.log(history);
  if(message.content == '!coinflip'){
    var random = Math.floor(Math.random() * 2) + 1;
    if(random == 1){
      random = 'heads';
    }else{
      random = 'tails';
    }
    message.reply('Your coin landed on ' + random);
  }
  if(message.content == '!roll'){
    var random = Math.floor(Math.random() * 6) + 1;
    message.reply('You rolled a ' + random);
  }
  if(message.content == '!quote'){
    var messages = history.length;
    var random = Math.floor(Math.random() * messages);
    message.channel.sendMessage(history[random]);
  }
  if(message.content == '!help'){
    message.reply("\nCommands:" +
    "\n!help: Show all commands." +
    "\n!quote: Quote a random message from this channel!" +
    "\n!roll: Roll a dice." +
    "\n!coinflip: Flip a coin."
    );
  }
})
bot.login('NDIxODM4OTYyMjM2MDYzNzQ1.DYW_Bg.vur6BwenOQFysr6RXkEOOKp2TpI');
