/* 
Functions:

- Functions provide a block of code that will only be ran once it is "called" upon.
- It starts with a keyword "function" followed by the name you give your function.
- Functions do NOT need to have arguments/parameters
- Functions do NOT need to return a value, however they often do
- Functions get hoisted, meaning you can call on them prior to the function decleration
*/

/*
keyword "function"
Function Name
inside the ()'s you have arguments
*/
exapmle1();
//   (1)   (2)   (3)
function exapmle1() {
  //any code in there will be executed when the function is "called"
  console.log("example1 function was executed.");
}

// You must call the function for it to be executed.
exapmle1();

/* 
Function with Parameters or Arguments
1. keyword "function"
2. function name
3. inside the ()'s we can have unlimited parameters all seperated by a comma

*/

function example2(param1, param2) {
  console.log("Example 2 function was executed.");
  console.log("Param1:", param1);
  console.log("Param2:", param2);
}

example2(10, 5);
example2("rob", "Vanarsdall");
example2(); //still runs but comes back undefined

function sumTwoNumbers(number1, number2) {
  let total = number1 + number2;
  return total;
}

let sum1 = sumTwoNumbers(10, 5);
let sum2 = sumTwoNumbers(20, 45);

console.log(sum1, sum2);

function calculateTax(cost, taxPercentage) {
  let totalTax = cost * taxPercentage;
  return +totalTax.toFixed(2);
}

let shoppingCartTotal = 21.99;
let checkoutTax = calculateTax(shoppingCartTotal, 0.08);
let checkoutTotal = sumTwoNumbers(shoppingCartTotal, checkoutTax);
console.log(checkoutTotal);

// ? Write a function that will take 3 arguments (length, width, height)
// ? function should return volume of the Cuboid

function cubiodVol(length, width, height) {
  return length * width * height;
}

console.log(cubiodVol(3, 3, 3));
console.log(cubiodVol(2, 2, 2));

// ? Write a function that accepts a dog's age and returns a human age.
// ? Human Age = (dogAge -2) * 4 + 21

function aDogsAge(dogAge) {
  let humanAge = (dogAge - 2) * 4 + 21;
  return humanAge;
}

console.log(aDogsAge(3));
console.log(aDogsAge(1));
console.log(aDogsAge(7));

let johnDogAge = aDogsAge(3);
let ashleeDogAge = aDogsAge(1.8);
let isaacDogAge = aDogsAge(11);
let nickDogAge = aDogsAge(14);
let trevorDogAge = aDogsAge(2.5);

[johnDogAge, ashleeDogAge, isaacDogAge, nickDogAge, trevorDogAge].map((x) =>
  console.log(x)
);

// ? Create a function called "divisible"
//  ? Takes 2 parameters firstNum, secondNum
// ? Return true if it divides evenly otherwise returns false
//? Refactor the code to return a ternary

function divisible(firstNum, secondNum) {
  return firstNum % secondNum === 0;
}

console.log(divisible(10, 2));
console.log(divisible(10, 3));

// When you are using arrow functions that are one line- omit the return because it is assumed
const divisible2 = (firstNum, secondNum) => firstNum % secondNum === 0;

console.log(divisible2(15, 3));

// ? Create a function using the arrow function method called difference
// ? The function will return the difference between the two numbers (positive number)

const difference = (firstNum, secondNum) => {
  let diff = Math.abs(firstNum - secondNum);
  return diff;
};

// const difference = (firstNum, secondNum) => firstNum - secondNum;

console.log(difference(25, 10));
console.log(difference(4, 10));

// ! Arrow Function DANGER: Arrow functions do not get hoisted! They need to be initialized first (place them above your code before you call it.)

function usedInputCleaner(word) {
  return word.toLowerCase().trim();
}

console.log(usedInputCleaner("     RaZzLe DaZzLe     "));
