memeArray = ["http://anonymous1062.github.io/memes/EFW323.jpeg", "http://anonymous1062.github.io/memes/ewFW.jpeg", "http://anonymous1062.github.io/memes/Anime.png", "http://anonymous1062.github.io/memes/_oEVaLAz5IvphKxZmSfcYNjmMaV85ZxBGF5BlO7JFv4.png", "https://i.redd.it/36s0aafny9a11.png", "http://anonymous1062.github.io/memes/f9a.jpg", "http://anonymous1062.github.io/memes/fwE.jpeg", "http://anonymous1062.github.io/memes/hytrdset.jpeg", "http://anonymous1062.github.io/memes/Kamino doesn't exist.png", "http://anonymous1062.github.io/memes/Naamloos.png", "http://anonymous1062.github.io/memes/Precision is not accuracy.png", "http://anonymous1062.github.io/memes/sewesw.jpeg", "http://anonymous1062.github.io/memes/ss.jpeg", "http://anonymous1062.github.io/memes/Wants-To-Round-Up-A-Group-Of-People-And-Build-A-Giant-Wall-Funny-Donald-Trump-Meme-Image.jpg", "http://anonymous1062.github.io/memes/wefaw.jpeg", "http://anonymous1062.github.io/memes/weferwrwe.jpeg", "http://anonymous1062.github.io/memes/wq3rr.jpeg", "http://anonymous1062.github.io/memes/WhatsApp Image 2018-10-11 at 15.09.03.jpeg"]
var randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
var prequelmeme = prequelArray[Math.floor(Math.random() * prequelArray.length)];

const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '607347702:AAFz1UiqPLLFUs5z0HMT7jVklLLpKVwX44E' // Telegram Bot API token.
});
bot.on('/start', function (msg) {
  console.log(msg.from.id + " started the bot")
  return bot.sendMessage(msg.chat.id, "Hello there!");
});
bot.on(/^pls meme/i, (msg) => {
  console.log(msg.from.id + " did something that is illegal because of Article 13")
  randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
    return bot.sendPhoto(msg.chat.id, randomMeme);
});
bot.on(/^pls prequel/i, (msg) => {
  console.log(msg.from.id + " did something that is illegal because of Article 13")
  prequelmeme = prequelArray[Math.floor(Math.random() * prequelArray.length)];
    return bot.sendPhoto(msg.chat.id, prequelmeme);
});
bot.on(/hello there/i, (msg) => {
  return bot.sendMessage(msg.chat.id, "General Kenobi");
});
bot.start();




//memeArray = ["http://anonymous1062.github.io/memes/EFW323.jpeg", "http://anonymous1062.github.io/memes/ewFW.jpeg"]
//http://anonymous1062.github.io/memes/EFW323.jpeg
//http://anonymous1062.github.io/memes/ewFW.jpeg
//http://anonymous1062.github.io/memes/Anime.png
//http://anonymous1062.github.io/memes/_oEVaLAz5IvphKxZmSfcYNjmMaV85ZxBGF5BlO7JFv4.png
//https://i.redd.it/36s0aafny9a11.png
//http://anonymous1062.github.io/memes/f9a.jpg
//http://anonymous1062.github.io/memes/fwE.jpeg
//http://anonymous1062.github.io/memes/hytrdset.jpeg
//http://anonymous1062.github.io/memes/Kamino doesn't exist.png
//http://anonymous1062.github.io/memes/Naamloos.png
//http://anonymous1062.github.io/memes/Precision is not accuracy.png
//http://anonymous1062.github.io/memes/sewesw.jpeg
//http://anonymous1062.github.io/memes/ss.jpeg
//http://anonymous1062.github.io/memes/Wants-To-Round-Up-A-Group-Of-People-And-Build-A-Giant-Wall-Funny-Donald-Trump-Meme-Image.jpg
//http://anonymous1062.github.io/memes/wefaw.jpeg
//http://anonymous1062.github.io/memes/weferwrwe.jpeg
//http://anonymous1062.github.io/memes/wq3rr.jpeg
//http://anonymous1062.github.io/memes/WhatsApp Image 2018-10-11 at 15.09.03.jpeg
//var randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
