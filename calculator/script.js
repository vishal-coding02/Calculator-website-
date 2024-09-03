const one_ele = document.getElementById("one-ele");
const two_ele = document.getElementById("two-ele");
const three_ele = document.getElementById("three-ele");
const four_ele = document.getElementById("four-ele");
const five_ele = document.getElementById("five-ele");
const six_ele = document.getElementById("six-ele");
const seven_ele = document.getElementById("seven-ele");
const eight_ele = document.getElementById("eight-ele");
const nine_ele = document.getElementById("nine-ele");
const point_ele = document.getElementById("point-ele");
const zero_ele = document.getElementById("zero-ele");
const delete_ele = document.getElementById("delete-ele");
const plus_ele = document.getElementById("plus-ele");
const multiply_ele = document.getElementById("multiply-ele");
const square_root_ele = document.getElementById("square-root-ele");
const subtract_ele = document.getElementById("subtract-ele");
const divide_ele = document.getElementById("divide-ele");
const equal_ele = document.getElementById("equal-ele");
const percent_ele = document.getElementById("percent-ele");
const display = document.querySelector(".res-cont h1");

let currentInput = "";
let CurrentOperator = null;
let firstOperand = null;

function updateDisplay(value) {
  display.textContent = value; // yah number and operator Kaise perform kar rahe hain vah show Karega
}

function handleCurrentNubmer(number) {
  currentInput += number; // Kisi bhi number per Ham click Karenge current input ke andar enter Karta rahega
  updateDisplay(currentInput); // jo bhi number per Ham click Karenge wo updateDisplay ander display variable ke textContent ko change kar dega
}

function handleOperatorClick(oper) {
  console.log(oper); // jab hum kisi operator oer click kafrte hai to usko wo consloe per show karega.

  if (firstOperand === null) {
    // agar firstOperand ki value null hai to firstOperand ke ander hum parseFloat(currentInput) kar denge jisse currentInput parseFloat int mein conv kar dega aur fir firstOperand ke ander  currentInput hoga jo ki a ki value hai..
    firstOperand = parseFloat(currentInput);
  } else if (currentInput !== "") {
    // agar currentInput khali Nahi Hai To.
    firstOperand = eval(
      firstOperand,
      parseFloat(currentInput),
      CurrentOperator
    ); // firstOperand ki value , parseFloat(currentInput) b ki value jo CurrentOperator uske brabar karde.
    updateDisplay(firstOperand); // updateDisplay ke ander firstOperand uske textcontent ko change kar dega
  }

  CurrentOperator = oper; // CurrentOperator ki value null hai hum = oper kar hai... , jis bhi  oper per click karte hai to uski value CurrentOperator mein a jayegi
  currentInput = ""; // ismein currentInput ki value dobara se null kar rahe hai...
  console.log(firstOperand);
}

function eval(a, b, oper) {
  switch (oper) {
    case "+": // agar oper plus per click hota hai to a + b ki value return karega
      return a + b;
    case "-": // agar oper subtract per click hota hai to a - b ki value return karega
      return a - b;
    case "x": // agar oper multiply per click hota hai to a * b ki value return karega
      return a * b;
    case "/": // b ki value divide 0 aati hai to wo Error dega Kyunki Kisi bhi Number Ko zero se divide Karenge to uska reminder zero aaega b ki value 0 nahi hai to wo a & b ko divide kar dega.
      return b === 0 ? "Error" : a / b;
    default: // currentInput in value 0 Rahegi
      return b;
  }
}

function handleEqualClick() {
  if (firstOperand !== null && currentInput !== "") {
    const result = eval(
      firstOperand,
      parseFloat(currentInput),
      CurrentOperator
    );
    updateDisplay(result);
    firstOperand = result;
    currentInput = "";
    CurrentOperator = null;
  }
}

function handleClear() {
  currentInput = "";
  firstOperand = null;
  CurrentOperator = null;
  updateDisplay("0");
}

function handleDelete(){
    currentInput = currentInput.slice(0, -1)
    updateDisplay(currentInput || "0")
}

function handleSqrt(){
    currentInput = Math.sqrt(parseFloat(currentInput));
    updateDisplay(currentInput);
}

function handlePercent(){
  if(currentInput !== ""){
    let val = parseFloat(currentInput) / 100;
    currentInput = val.toString();
    updateDisplay(currentInput);
  }
  
}

one_ele.addEventListener("click", () => {
  handleCurrentNubmer("1");
});
two_ele.addEventListener("click", () => {
  handleCurrentNubmer("2");
});
three_ele.addEventListener("click", () => {
  handleCurrentNubmer("3");
});
four_ele.addEventListener("click", () => {
  handleCurrentNubmer("4");
});
five_ele.addEventListener("click", () => {
  handleCurrentNubmer("5");
});
six_ele.addEventListener("click", () => {
  handleCurrentNubmer("6");
});
seven_ele.addEventListener("click", () => {
  handleCurrentNubmer("7");
});
eight_ele.addEventListener("click", () => {
  handleCurrentNubmer("8");
});
nine_ele.addEventListener("click", () => {
  handleCurrentNubmer("9");
});
zero_ele.addEventListener("click", () => {
  handleCurrentNubmer("0");
});

multiply_ele.addEventListener("click", () => {
  handleOperatorClick("x");
});

plus_ele.addEventListener("click", () => {
  handleOperatorClick("+");
});

subtract_ele.addEventListener("click", () => {
  handleOperatorClick("-");
});

divide_ele.addEventListener("click", () => {
  handleOperatorClick("/");
});

equal_ele.addEventListener("click", () => {
    handleEqualClick();
});

delete_ele.addEventListener("click", () => {
    handleDelete();
});

point_ele.addEventListener("click", () => {
    handleClear();
});

percent_ele.addEventListener("click", () => {
  handlePercent()
});

square_root_ele.addEventListener("click", () => {
    handleSqrt();
});

// console.log(
//   one_ele,
//   equal_ele,
//   two_ele,
//   three_ele,
//   delete_ele,
//   four_ele,
//   five_ele,
//   six_ele,
//   seven_ele,
//   eight_ele,
//   square_root_ele,
//   nine_ele,
//   plus_ele,
//   divide_ele,
//   zero_ele,
//   multiply_ele,
//   subtract_ele,
//   point_ele,
//   percent_ele
// );
