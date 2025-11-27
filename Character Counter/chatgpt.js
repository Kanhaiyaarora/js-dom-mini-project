// --------------------------
// DOM SELECTION (SOC Part 1)
// --------------------------
const ta = document.querySelector("textarea");
const countbtn = document.querySelector("#count");
const main = document.querySelector(".main");
const clearbtn = document.querySelector("#clear");

// --------------------------
// PURE LOGIC FUNCTIONS (SOC Part 2)
// --------------------------

// Count characters (pure function)
function getCharacterCount(text) {
  return text.length;
}

// --------------------------
// UI UPDATE FUNCTIONS (SOC Part 3)
// --------------------------

// Remove previous result if exists
function clearResult() {
  const result = document.querySelector(".result");
  if (result) result.remove();
}

// Show the result on screen
function showResult(count) {
  const h2 = document.createElement("h2");
  h2.className = "result";
  h2.innerText = `Total characters typed: ${count}`;
  main.appendChild(h2);
}

// --------------------------
// EVENT HANDLERS (SOC Part 4)
// --------------------------

// Count button click handler
function handleCountClick() {
  clearResult(); // Old result remove

  const count = getCharacterCount(ta.value); // Logic

  if (count > 0) {
    showResult(count); // UI update
  }
}

// Clear button click handler
function handleClearClick() {
  ta.value = "";
  clearResult();
}

// --------------------------
// EVENT LISTENERS (SOC Part 5)
// --------------------------
countbtn.addEventListener("click", handleCountClick);
clearbtn.addEventListener("click", handleClearClick);
