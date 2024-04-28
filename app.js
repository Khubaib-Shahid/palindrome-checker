let text = document.getElementById("text-input");

let result = document.getElementById("output");

let char = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
  '"',
  "'",
  ":",
  ";",
  "[",
  "]",
  "{",
  "}",
  `\\`,
  "|",
];

function checker() {
  let str = text.value;
  str = str.toLowerCase();
  if (text.value === "") {
    alert("Please input a value");
  } else {
    for (let i = 0; i < text.value.length; i++) {
      for (let j = 0; j < char.length; j++) {
        if (text.value[i] === char[j] || text.value[i] === " ") {
          str = str.replace(`${text.value[i]}`, ``);
        }
      }
    }
    if (str === str.split("").reverse().join("")) {
      result.innerHTML = `<h3 class="mess">${text.value} is a Palindrome</h3>`
    } else {
      result.innerHTML = `<h3 class="mess">${text.value} is not a Palindrome</h3>`
    }
  }
}
