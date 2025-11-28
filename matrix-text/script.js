var para = document.querySelector("p");
const text = para.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

para.addEventListener("mouseenter", (e) => {
  let iteration = 0;
  let interval = setInterval(() => {
    const str = text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return char;
        }
        return characters.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");
    para.innerText = str;
    iteration += 0.50;
    console.log(iteration);
    if (iteration > text.length) {
      clearInterval(interval);
    }
  }, 30);
});
