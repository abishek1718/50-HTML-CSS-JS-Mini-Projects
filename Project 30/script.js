const textEl = document.getElementById("text");
const SpeedEl = document.getElementById("speed");
const text = "We love Programming!";

let idx = 1;
let speed = 300 / SpeedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

SpeedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
