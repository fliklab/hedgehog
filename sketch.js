const initialWidth = window.innerWidth;

function setup() {
  createCanvas(initialWidth, initialWidth);
}

const bugs = ["🐜", "🐞", "🪳", "🪳", "🪱"];

let i = 0;
let hold = false;

function draw() {
  background(220);

  stroke(1);
  strokeWeight(1);

  let cWidth = window.innerWidth;

  fill(130);
  rect(0, 0, cWidth, cWidth);

  fill(0);
  textSize(48);

  stroke(0);

  const bugSize = Math.max(cWidth * 0.15);
  textSize(bugSize);
  text(bugs[i], 30, 130);

  rotate(0);
  const hedgeHogSize = Math.max(cWidth * 0.35, 120);
  textSize(hedgeHogSize);
  text("🦔", int(width - hedgeHogSize - 20), 130);

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
