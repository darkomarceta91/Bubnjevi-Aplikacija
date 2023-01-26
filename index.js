const allButtons = document.querySelector(".set");
allButtons.addEventListener("click", function () {
  if (event.target.nodeName === "BUTTON") {
    // console.log(event.target.classList[0]);
    const playSound = function (letter) {
      if (letter === "w") {
        audio1.play();
      }
      if (letter === "a") {
        audio2.play();
      }
      if (letter === "s") {
        audio3.play();
      }
      if (letter === "d") {
        audio4.play();
      }
      if (letter === "j") {
        audio5.play();
      }
      if (letter === "k") {
        audio6.play();
      }
      if (letter === "l") {
        audio7.play();
      }
    };
    // console.log(event.target.classList[0]);
    playSound(event.target.classList[0]);
  }
});

const audio1 = new Audio("sounds/crash.mp3");
const audio2 = new Audio("sounds/kick-bass.mp3");
const audio3 = new Audio("sounds/snare.mp3");
const audio4 = new Audio("sounds/tom-1.mp3");
const audio5 = new Audio("sounds/tom-2.mp3");
const audio6 = new Audio("sounds/tom-3.mp3");
const audio7 = new Audio("sounds/tom-4.mp3");

const body = document.querySelector("body");
body.addEventListener("keydown", function () {
  //   console.log(event.key);
  const keyPressed = event.key;

  const playSound = function (letter) {
    if (letter === "w") {
      audio1.play();
    }
    if (letter === "a") {
      audio2.play();
    }
    if (letter === "s") {
      audio3.play();
    }
    if (letter === "d") {
      audio4.play();
    }
    if (letter === "j") {
      audio5.play();
    }
    if (letter === "k") {
      audio6.play();
    }
    if (letter === "l") {
      audio7.play();
    }
  };

  playSound(keyPressed);
});
