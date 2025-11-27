let key = document.querySelector("h1");

let sound = new Audio("./mp3 piano/24.mp3");

document.body.addEventListener("keydown", function (dets) {
  key.innerText = dets.code;
  if (dets.code == "Space") {
    sound.play();
  }
});
