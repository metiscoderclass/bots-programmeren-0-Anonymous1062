const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '607347702:AAFz1UiqPLLFUs5z0HMT7jVklLLpKVwX44E' // Telegram Bot API token.
});

memeArray = ["files/shrek.jpeg", "files/Anime.png", "https://i.redd.it/36s0aafny9a11.png", "files/f9a.jpg", "files/Hitler.jpeg", "files/Donald Trump.jpg", "files/EArth.jpeg", "files/HP.jpeg"]
prequelArray = ["files/pokemon.jpeg", "files/lesboek.png", "files/Roses are red.jpeg", "files/Jesus.jpeg", "files/Kamino doesn't exist.png", "files/didju.png", "files/Precision is not accuracy.png", "files/Anakin game.jpeg", "files/Didju.jpeg", "files/We are the senate.png"]
var randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
var prequelmeme = prequelArray[Math.floor(Math.random() * prequelArray.length)];
var quiz = 0;
var aantal = 0;
var vragen = [{ vraag: "What is the name of ...?", antw: "..."}, { vraag: "Complete the sentence: Another happy", antw: "landing"}, { vraag: "Which color does ... have?", antw: "..."}]

var opgave = vragen[aantal];

//vraagAntw = { vraag: "hoi", antw: "doei"}
//vraagAntw.vraag

function newgame() {
  if (quiz == true) {
    clearInterval(timer1);
    bot.on(/^star wars/i, (msg) => {
      console.log(msg.from.first_name + " started SW quiz");
      return bot.sendMessage(msg.chat.id, opgave.vraag);
    });
  }
}

bot.on(/(.*)/, (msg, props) => {
  if (quiz == true){
    console.log(msg.text)
    message = msg.text;
    if (message.toLowerCase() == "/a " + opgave.antw){
      console.log(msg.from.first_name + " gave the right answer");
      aantal += 1;
      opgave = vragen[aantal];
      return bot.sendMessage(msg.chat.id, "Well done, " + msg.from.first_name + " now has " + "<punten>" + " points"), bot.sendMessage(msg.chat.id, opgave.vraag);
    }
  }
})


































bot.on('/start', function (msg) {
  console.log(msg.from.first_name + " started the bot");
  return bot.sendDocument(msg.chat.id, "https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif");
});
bot.on('/help', function (msg) {
  console.log(msg.from.first_name + " asked for assistance from the Jedi Council");
  return bot.sendMessage(msg.chat.id, "Commands: meme, prequel, logo, song, info, sith, jedi, quiz and news. My prefix is pls.");
});
bot.on(/^pls help/i, function (msg) {
  console.log(msg.from.first_name + " asked for assistance from the Jedi Council");
  return bot.sendMessage(msg.chat.id, "Commands: meme, prequel, logo, song, info, sith, jedi, quiz and news. My prefix is pls.");
});
bot.on(/^pls info/i, function (msg) {
  console.log(msg.from.first_name + " got some info");
  return bot.sendMessage(msg.chat.id, "The bot still is Work in Progress, it will be finished soon. I am just a simple man trying to make my way into the universe.");
});
bot.on(/^pls meme/i, (msg) => {
  console.log(msg.from.first_name + " dealed illegally in memes");
  randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
  return bot.sendPhoto(msg.chat.id, randomMeme);
});
bot.on(/^pls prequel/i, (msg) => {
  console.log(msg.from.first_name + " obtained the high ground");
  prequelmeme = prequelArray[Math.floor(Math.random() * prequelArray.length)];
  return bot.sendPhoto(msg.chat.id, prequelmeme);
});
bot.on(/hello there/i, (msg) => {
  console.log(msg.from.first_name + " engaged General Grievous");
  return bot.sendMessage(msg.chat.id, "General Kenobi");
});
bot.on(/^pls logo/i, (msg) => {
  console.log(msg.from.first_name + " saw EA's true nature");
  return bot.sendDocument(msg.chat.id, "files/EA.mp4");
});
bot.on(/^pls quiz/i, (msg) => {
  console.log(msg.from.first_name + " somehow found this commmand");
  quiz = true;
  return bot.sendMessage(msg.chat.id, "Started the quiz, choose question list");
});
bot.on(/^pls sith/i, (msg) => {
  console.log(msg.from.first_name + " is following the Code of the Sith");
  return bot.sendMessage(msg.chat.id, "Peace is a lie. There is only Passion. Through Passion I gain Strength. Through Strength I gain Power. Through Power I gain Victory. Through Victory my chains are broken. The Force shall free me.");
});
bot.on(/^pls news/i, (msg) => {
  console.log(msg.from.first_name + " watched the holonet");
  return bot.sendMessage(msg.chat.id, "Russische trollen hadden Star Wars gebruikt om verdeeldheid te zaaien."), bot.sendPhoto(msg.chat.id, "https://cdn.discordapp.com/attachments/431768616833122305/502788066700689408/done.png"), bot.sendMessage(msg.chat.id, "Special thanks to Douwe Raat for making the picture");
});
bot.on(/^pls song/i, (msg) => {
  console.log(msg.from.first_name + " listened to amazing songs");
  return bot.sendDocument(msg.chat.id, "files/High ground.mp3");
});

var timer1 = setInterval(newgame, 1000);

bot.start();
