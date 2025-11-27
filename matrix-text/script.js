var para = document.querySelector("p");
const text = para.innerText;
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";



para.addEventListener("mouseenter", (e) => {
  setInterval(() => {
    const str = text.split("").map((char, index) => {
        return characters.split("")[Math.floor(Math.random() * 53)];
      }).join("");
    para.innerText = str; 
  }, 30);
});
