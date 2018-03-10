const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

  if(message.content == '!ping'){
    message.reply('Pong!');
  }
})
bot.login('NDIxODM4OTYyMjM2MDYzNzQ1.DYTDvw.iFp1ECnIX88y3XANVq3hRKD6WjE');
