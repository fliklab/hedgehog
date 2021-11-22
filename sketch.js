const initialWidth = window.innerWidth;

function setup() {
  createCanvas(initialWidth, initialWidth);
}

const bugs = [
  "🐜",
  "🐞",
  "🪳",
  "🪳",
  "🪱",
  "🐵",
  "🐸",
  "🐥",
  "🍕",
  "🍷",
  "🚬",
  "🍆",
  "🥕",
  "🥔",
];

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

  rotate(0);
  const hedgeHogSize = Math.min(Math.max(cWidth * 0.35, 120), 400);
  textSize(hedgeHogSize);
  text("🦔", int(width - hedgeHogSize * 1.15), hedgeHogSize + 10);

  const bugSize = Math.min(Math.max(cWidth * 0.15), 200);
  textSize(bugSize);
  text(bugs[i], 30, hedgeHogSize + 10);

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
