const circles = document.querySelectorAll(".circles");
const scoreText01 = document.querySelector(".score");

const buttonStart = document.querySelector("#buttonStart");
const buttonStop = document.querySelector("#buttonStop");

const alertBox = document.querySelector("#alertBox");
const scoreText02 = document.querySelector(".scoreText");

let score = 0;
let circlesArr = [];
circles.forEach((circle) => circlesArr.push(circle));

let newCircle = 0;
let nextCircle = 0;
let rounds = 0;
let timer;
let pace = 1000;

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function startGame() {
  nextCircle = randomNumber(0, 3);
  checkCircle(nextCircle);
  circles.forEach((circle) => {
    circle.style.backgroundColor = "";
    circle.querySelector("img").style.width = "6em";
    circle.querySelector("img").style.height = "6em";
    circle.querySelector("img").style.marginRight = "1.7em";
  });
  newCircle = circlesArr[nextCircle];
  circlesArr[nextCircle].style.backgroundColor = "black";
  circlesArr[nextCircle].querySelector("img").style.width = "10em";
  circlesArr[nextCircle].querySelector("img").style.height = "10em";

  // console.log(circlesArr[nextCircle].querySelector("img").style.height);

  function checkCircle(nextCircle) {
    if (nextCircle != newCircle) return nextCircle;
    else return randomNumber(0, 3);
  }

  timer = setTimeout(startGame, pace);
  pace = pace - 10;
}

circles.forEach((circle, i) =>
  circle.addEventListener("click", () => {
    clickedCircle(i);
  })
);

function clickedCircle(i) {
  if (i !== nextCircle) {
    endGame();
  } else if (i === nextCircle) {
    luvPoint();
    score++;
    rounds--;
    scoreText01.textContent = score;
  }
}

const endGame = () => {
  console.log("game ended");
  score.textContent = 0;
  circles.forEach((circle) => (circle.style.backgroundColor = ""));
  clearTimeout(timer);
  alertGame();
  endGameMusic();
};

buttonStop.addEventListener("click", (event) => {
  endGame();
});

buttonStart.addEventListener("click", (event) => {
  startGame();
  startGameMusic();
});

const alertGame = () => {
  alertBox.style.visibility = "visible";
  if (score <= 3) {
    scoreText02.innerHTML = `
      <p>
        ${score} <span>luvs</span>, c'mon...
      </p>
    `;
  } else if (score > 3 && score <= 10) {
    scoreText02.innerHTML = `
      <p>
        ${score} <span>luvs</span>, youre a catch!
      </p>`;
  } else if (score > 10) {
    scoreText02.innerHTML = `<p>${score} <span>luvs</span>, woooww save <span>luv</span> for the rest of us, Casanova!</p>`;
  }

  alertBox.addEventListener("click", (event) => {
    alertBox.style.visibility = "hidden";
    circles.forEach((circle) => (circle.style.backgroundColor = ""));
    window.location.reload();
  });
};

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

const startGameMusic = () => {
  startSound = new sound("/mp3/01.mp3");
  startSound.play();
};

const endGameMusic = () => {
  endSound = new sound("/mp3/02.mp3");
  startSound.stop();
  endSound.play();
};

const luvPoint = () => {
  luvSound = new sound("/mp3/03.mp3");
  luvSound.play();
};
