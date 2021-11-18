//exercise 1:
// alert("יש להכניס מספר לתיבת הטקסט");

const runNumber = () => {
  let numberInput = document.getElementById("numberInput");
  let number = Number(numberInput.value);
  let resultBox = document.getElementById("name-box");

  try {
    if (isNaN(number)) {
      console.error("רק מספרים מותרים");
      resultBox.innerText = "רק מספרים מותרים";
    } else {
      console.log(number);
      resultBox.innerText = number;
    }
    if (number == "") {
      console.error("לא הכנסת מספר");
      resultBox.innerText = "לא הכנסת מספר";
    }
  } catch (error) {
    alert("רק מספרים מותרים");
  }
};

//exercise 2:

const callMyName = () => {
  let name = prompt("enter your name: ");
  alert(name);
  let resultBox = document.getElementById("name-box");
  resultBox.innerText = name;
};

const X = (callback) => {
  callback();
};

const displayMyName = () => X(callMyName);

//exercise 3:
function cool(callback) {
  callback();
}

function randomNumber() {
  let number = Math.floor(Math.random() * 100);
  let resultBox = document.getElementById("name-box");
  resultBox.innerText = number;
  console.log(number);
}

function RanNum() {
  cool(randomNumber);
}

//exercise 4:
function nice4(callback) {
  callback(42);
}

function showNum(num) {
  let resultBox = document.getElementById("name-box");
  resultBox.innerText = num;
}

function exercise4() {
  nice4(showNum);
}

//exercise 5:
function amazing1(callback) {
  const num = callback(42, 128, 37, 81, 66);
  let resultBox = document.getElementById("name-box");
  resultBox.innerText = num;
}

function exercise5() {
  amazing1(fiveArguments);
}

function fiveArguments(a, b, c, d, e) {
  let array = [a, b, c, d, e];
  let oneOfFive = array[Math.floor(Math.random() * array.length)];
  console.log(oneOfFive);
  return oneOfFive;
}

//exercise 6:
function cool(paintCallback) {
  paintCallback();
}

function colorfullBackground() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  let resultBox = document.getElementById("name-box");
  resultBox.innerText = "#" + randomColor;
}

function exercise6() {
  cool(colorfullBackground);
}

//exercise 7:
function nice(paintCallback) {
  paintCallback("Green");
}

function colorForBackground(a) {
  document.body.style.backgroundColor = a;
}
function exercise7() {
  nice(colorForBackground);
}

//exercise 8:
function amazing(paintCallback) {
  const paintedColor = paintCallback("Red", "Green", "Blue");

  let resultBox = document.getElementById("name-box");
  resultBox.innerText = "Painted Color: " + paintedColor;
}

function paintOneOfThree(a, b, c) {
  let array = [a, b, c];
  let oneOfThree = array[Math.floor(Math.random() * array.length)];
  console.log(oneOfThree);

  document.body.style.backgroundColor = oneOfThree;
  return oneOfThree;
}

function exercise8() {
  amazing(paintOneOfThree);
}

//exercise 9:

function exercise9() {
  setInterval(pickRanNum, 1000);
}

function pickRanNum() {
  let resultBox = document.getElementById("name-box");
  resultBox.innerText = Math.floor(Math.random() * 100);
}

//איך עושים סטופ לאינטרוול?
// const stopExercise9 = () => {
//   clearInterval();
// };

//exercise 10:

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}

function exercise10() {
  setInterval(random_bg_color, 1000);
}

//exercise 11:
let resultBox = document.getElementById("name-box");
let counter = 1;

function exercise11() {
  setInterval(setArray, 3000);
}

function setArray() {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  console.log(array);
  resultBox.innerHTML = `<p>array ${counter++}: </p> ${array}`;
}

//annonymous function
const anonymousFunction = () => {
  X(() => alert("lital"));
};
