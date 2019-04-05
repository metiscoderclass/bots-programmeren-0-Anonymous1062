const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '607347702:AAFz1UiqPLLFUs5z0HMT7jVklLLpKVwX44E' // Telegram Bot API token.
});
//memes
var memeArray = ["files/shrek.jpeg", "files/Anime.png", "https://i.redd.it/36s0aafny9a11.png", "files/f9a.jpg", "files/Hitler.jpeg", "files/Donald Trump.jpg", "files/EArth.jpeg", "files/HP.jpeg", "files/mods.jpg", "files/phil swift.jpg"]
var prequelArray = ["files/pokemon.jpeg", "files/lesboek.png", "files/Roses are red.jpeg", "files/Jesus.jpeg", "files/Kamino doesn't exist.png", "files/didju.png", "files/Precision is not accuracy.png", "files/Anakin game.jpeg", "files/Didju.jpeg", "files/We are the senate.png", "files/training.jpg"]
var randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
var prequelmeme = prequelArray[Math.floor(Math.random() * prequelArray.length)];
//making 3 empty var's
var quiz = 0;
var aantal = 0;
var sw = 0;
//the questions for the SW quiz
var vragen = [{ vraag: "Query: What does Obi-Wan say when jumping down behind Grievous?", antw: "hello there"}, { vraag: "Query: Complete the sentence: Another happy", antw: "landing"}, { vraag: "Query: What is the color of Mace Windu's lightsaber?", antw: "purple"}, { vraag: "Query: What is the main character of the game Knights of the Old Republic(KOTOR)?", antw: "revan"}, { vraag: "Query: What was the name of Qui-Gon's master?", antw: "dooku"}, { vraag: "Query: What does Obi-Wan get to defeat Anakin/Darth Vader?", antw: "the high ground"}, { vraag: "Query: What rank does Rex have?", antw: "captain"}, { vraag: "Query: Who was the leader of the trade federation?", antw: "nute gunray"}, { vraag: "Query: What is the name of Anakin's apprentice?", antw: "ahsoka tano"}, { vraag: "Query: Who was Palpatine's Sith Master?", antw: "darth plagueis"}, { vraag: "Query: Where were the Clone troopers created?", antw: "kamino"}, { vraag: "Query: What was the species of Darth Maul?", antw: "zabrak"}, { vraag: "Query: The Sith Code: Peace is a lie, there is only...", antw: "passion"}, { vraag: "Query: The Jedi Code: There is no emotion, there is...", antw: "peace"}, { vraag: "Query: Who rules the Sith Empire when KOTOR starts?", antw: "darth malak"}, { vraag: "Query: What is the name of the people that 'follow the ways of Revan' in SWTOR?", antw: "revanites"}, { vraag: "Query: Who was the Jedi Grandmaster in SWTOR?", antw: "satele shan"}];
//the score for each person
var scores = [];
//load question 1
var opgave = vragen[aantal];
//give points to the player that gives the right answer
function geefPunt(speler){
    spelerScore = scores.find(function (score) { return score.id == speler.id;});
    if (spelerScore) {
      spelerScore.score++;
    }
    else {
      spelerScore = {};
      spelerScore.id = speler.id;
      spelerScore.naam = speler.first_name;
      spelerScore.score = 1;
      scores.push(spelerScore);
    }
}
//end the quiz
function endQuiz() {
  sw = false;
  aantal = 0;
  scores = [];
  opgave = vragen[aantal];
}

//starting a SW quiz
function newgame() {
  if (quiz == true) {
    clearInterval(timer1);
    bot.on(/^star wars/i, (msg) => {
      console.log(msg.from.first_name + " started SW quiz");
      sw = true;
      bot.sendMessage(msg.chat.id, "Say /quit to stop the quiz, and /skip to skip a question");
      return bot.sendMessage(msg.chat.id, opgave.vraag);
    })
  }
}
//The quiz:
bot.on(/(.*)/, (msg, props) => {
  console.log(msg.chat.title + ": " + msg.from.first_name + " says: " + msg.text);
  message = msg.text;
  if (sw == true){ //if quiz started
    if (aantal == 16) {
      endQuiz();
      return bot.sendMessage(msg.chat.id, "Well done! This is the end of the quiz, now you can try again or use other commands!");
    }
    else if (message.toLowerCase() == opgave.antw){ //if right answer
      console.log(msg.from.first_name + " gave the right answer");
      aantal += 1; //the question the player is now
      console.log(aantal)
      opgave = vragen[aantal]; //load new question
      geefPunt(msg.from);
      return bot.sendMessage(msg.chat.id, "Statement: Well done, " + spelerScore.naam + " now has " + spelerScore.score + " points"), bot.sendMessage(msg.chat.id, opgave.vraag);
    }
    else if (message.toLowerCase() == "/skip"){ //skipping questions
      console.log(msg.from.first_name + " skipped the question");
      aantal += 1;
      opgave = vragen[aantal];
      return bot.sendMessage(msg.chat.id, "You skipped the question"), bot.sendMessage(msg.chat.id, opgave.vraag);
    }
     else if (message.toLowerCase() == "/quit"){//stopping the quiz
       endQuiz();
       return bot.sendMessage(msg.chat.id, "You stopped the quiz");
     }
     else {//if answer is wrong
       bot.sendMessage(msg.chat.id, "This is the wrong answer, you misspelled it, or you are missing something in the answer, try again");
     }
  }
  else if (message.toLowerCase() == "hello there"){//Hello there!!!
    console.log(msg.from.first_name + " engaged General Grievous");
    return bot.sendMessage(msg.chat.id, "General Kenobi");
  }
});























bot.on('/start', function (msg) {
  console.log(msg.from.first_name + " started the bot");
  return bot.sendDocument(msg.chat.id, "https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif");
});
bot.on('/help', function (msg) {
  console.log(msg.from.first_name + " asked for assistance from the Jedi Council");
  return bot.sendMessage(msg.chat.id, "Commands: meme, prequel, logo, song, info, sith, jedi, quiz and news. Use 'HK' before the command to active the bot."), bot.sendMessage(msg.chat.id, "Sub to Pewdiepie");
});
bot.on(/^hk help/i, function (msg) {
  console.log(msg.from.first_name + " asked for assistance from the Jedi Council");
  return bot.sendMessage(msg.chat.id, "Commands: meme, prequel, logo, song, info, sith, jedi, quiz and news. Use 'HK' before the command to active the bot."), bot.sendMessage(msg.chat.id, "Sub to Pewdiepie");
});
bot.on(/^hk info/i, function (msg) {
  console.log(msg.from.first_name + " got some info");
  return bot.sendMessage(msg.chat.id, "The bot isn't completely finished, I'll update it whenever I feel like. Don't be angry about that, I am just a simple man trying to make my way into the universe.");
});
bot.on(/^hk meme/i, (msg) => {
  console.log(msg.from.first_name + " dealed illegally in memes");
  randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
  return bot.sendPhoto(msg.chat.id, randomMeme);
});
bot.on(/^hk prequel/i, (msg) => {
  console.log(msg.from.first_name + " obtained the high ground");
  prequelmeme = prequelArray[Math.floor(Math.random() * prequelArray.length)];
  return bot.sendPhoto(msg.chat.id, prequelmeme);
});
bot.on(/^hk logo/i, (msg) => {
  console.log(msg.from.first_name + " saw EA's true nature");
  return bot.sendDocument(msg.chat.id, "files/EA.mp4");
});
bot.on(/^hk quiz/i, (msg) => {
  quiz = true;
  bot.sendMessage(msg.chat.id, "Choose a question list, options: Star Wars")
  return bot.sendMessage(msg.chat.id, "WARNING: some of the question lists can contain spoilers for movies, games, TV-shows or books");
});
bot.on(/^hk sith/i, (msg) => {
  console.log(msg.from.first_name + " is following the Code of the Sith");
  return bot.sendMessage(msg.chat.id, "Peace is a lie. There is only Passion. Through Passion I gain Strength. Through Strength I gain Power. Through Power I gain Victory. Through Victory my chains are broken. The Force shall free me.");
});
bot.on(/^hk news/i, (msg) => {
  console.log(msg.from.first_name + " watched the holonet");
  return bot.sendMessage(msg.chat.id, "Russische trollen hadden Star Wars gebruikt om verdeeldheid te zaaien."), bot.sendPhoto(msg.chat.id, "https://cdn.discordapp.com/attachments/431768616833122305/502788066700689408/done.png"), bot.sendMessage(msg.chat.id, "Special thanks to Douwe Raat for making the picture");
});
bot.on(/^hk song/i, (msg) => {
  console.log(msg.from.first_name + " listened to amazing songs");
  return bot.sendDocument(msg.chat.id, "files/High ground.mp3");
});
bot.on(/^hk jedi/i, (msg) => {
  console.log(msg.from.first_name + " is following the Code of the Jedi");
  return bot.sendMessage(msg.chat.id, "There is no emotion, there is peace. There is no ignorance, there is knowledge. There is no passion, there is serenity. There is no chaos, there is harmony. There is no death, there is the Force.");
});

var timer1 = setInterval(newgame, 1000);

bot.start();
