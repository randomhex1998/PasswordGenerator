let passArray = [
   "0",
   "1",
   "2",
   "3",
   "4",
   "5",
   "6",
   "7",
   "8",
   "9",
   "q",
   "w",
   "e",
   "r",
   "t",
   "y",
   "u",
   "i",
   "o",
   "p",
   "[",
   "]",
   "{",
   "}",
   "a",
   "s",
   "d",
   "f",
   "g",
   "h",
   "j",
   "k",
   "l",
   "z",
   "x",
   "c",
   "v",
   "b",
   "n",
   "m",
   "<",
   ">",
   "/",
   "?",
   "!",
   "@",
   "#",
   "$",
   "%",
   "^",
   "&",
   "*",
   ")",
   "(",
];
let inputBoxShow = document.querySelector("#show-input-box");
let generateBtn = document.getElementsByClassName("gen")[0];
let copyBtn = document.getElementsByClassName("copy")[0];
let index = 8;
generateBtn.addEventListener("click", () => {
   inputBoxShow.value = "";
   for (let i = 0; i < index; i++) {
      inputBoxShow.value += passArray[Math.floor(Math.random() * passArray.length)];
   }
});

copyBtn.addEventListener("click", () => {
   inputBoxShow.select();
   document.execCommand("copy");
});
