function setup() {
  createCanvas(320, 160);
}

const bugs = ["🐜", "🐞", "🪳", "🪳", "🪱"];

let i = 0;
let hold = false;

function draw() {
  background(220);

  stroke(0);

  textSize(48);
  text(bugs[i], 30, 130);

  rotate(0);
  textSize(120);
  text("🦔", 182, 130);

  textSize(40);

  if (hold) i = (i + 1) % bugs.length;

  if (mouseIsPressed) {
    hold = true;
  } else {
    hold = false;
  }
}

function touchStarted() {
  hold = true;
}

function touchEnded() {
  hold = false;
}
