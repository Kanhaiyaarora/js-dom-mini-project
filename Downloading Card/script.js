let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");

let counter = 0;

btn.addEventListener("click", function () {

  setInterval(() => {
    if (counter < 100) {
      counter++;
      inner.style.width = counter + "%";
      h1.innerText = counter + "%";
      h1.style.opacity = counter / 100;
      h2.innerText = "Your File Song.mp3 is now Downloading...";
      btn.innerText = "Downloading";
    } else {
      btn.style.opacity = 0;
      h2.innerText = "File Song.mp3 Downloaded. You're all set!";
      clearInterval();
    }
  }, 30);

});
