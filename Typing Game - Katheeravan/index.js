var button = document.querySelector("button");
var music = new Audio("music/kids_song.mp3");
music.volume = 0.3;
var c_music = new Audio("music/bell.mp3");
c_music.volume = 1;
var timer = document.querySelector(".time");
var word = document.querySelector(".words");
var score = document.querySelector(".score");
var text = [
  "CAT",
  "DOG",
  "MOUSE",
  "WHALE",
  "SHARK",
  "DRAGON",
  "BALL",
  "BAT",
  "TOM",
  "JERRY",
  "LOVE",
];
var current;
var count = 0;

function countdown() {
  var starttime = 20;

  var game = setInterval(function () {
    starttime--;
    if (starttime >= 0) {
      timer.innerHTML = starttime;
    } else {
      alert("The Game is Over!!! Your Score is " + score.innerHTML);
      music.pause();
      word.innerHTML = "Words";
      score.innerHTML = "0";
      timer.innerHTML = "20";
      button.disabled = false;
      clearInterval(game);
    }
  }, 1000);
}

function word_random() {
  word.innerHTML = "";
  min = 0;
  max = text.length;
  var r_num = Math.floor(Math.random() * (max - min + 1)) + min;
  var split_word = text[r_num];

  split_word.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerHTML = character;
    word.appendChild(characterSpan);
  });
}

function check(key) {
  var alpha = String.fromCharCode(key.which);
  var array = document.querySelectorAll("span");

  let correct = false;
  array.forEach((characterSpan) => {
    if (alpha === characterSpan.innerHTML) {
      characterSpan.classList.add("correct");
      correct = true;
    } else {
      correct = false;
    }
  });
  if (correct) {
    count = count + 1;
    c_music.play();
    score.innerHTML = count;
    word_random();
  }
}

button.addEventListener("click", function (e) {
  //   let file = new FileReader();
  //   file.onload = (e) => {
  //     const files = e.target.result;
  //   };
  count = 0;
  music.play();
  countdown();
  button.disabled = true;
  word_random();
});

document.addEventListener("keypress", check, false);
