const Discord = require('discord.js');
const bot = new Discord.Client();
var history = [];
bot.on('message', (message) => {
  console.log('message detected');
  if(message.author.username != "Shadow Bot" && message.content != "!quote" && message.content != "!help"){
    history.push(message.author.username + ': ' + message.content);
  }
  // console.log(history);
  if(message.content == '!quote'){
    var messages = history.length;
    var random = Math.floor(Math.random() * messages);
    message.channel.sendMessage(history[random]);
  }
  if(message.content == '!help'){
    message.reply("\nCommands:\n!help: Show all commands.\n!quote: Quote a random message from this channel!");
  }
})
bot.login('token hidden. please use the link in readme.');
