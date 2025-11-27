let ta = document.querySelector("textarea");
let countbtn = document.querySelector("#count");
let main = document.querySelector(".main");
let clearbtn = document.querySelector("#clear");

countbtn.onclick = () => {
  let result = document.querySelector(".result");
  result?.remove();
  let c = ta.value.length;
  if (c > 0) {
    let h2 = document.createElement("h2");
    h2.className = "result";
    h2.innerText = "Total characters typed: " + c;
    main.appendChild(h2);
  }
};

clearBtn.onclick = () => {
  ta.value = "";
  result?.remove();
};
