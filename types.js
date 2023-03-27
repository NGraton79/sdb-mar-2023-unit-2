/* 
Types - Data Types 
- Strings
*/

/* 
Strings:
- datatypes used to represent text and they are wrapped in single quotes, double  quotes, or backticks.
*/

let stringOne = "double quotes";
//prettier-ignore
let stringtwo = 'single quotes'

let stringThree = `backtick quotes`;

// Combining Strings - concat - 

let greeting = "Good Morning";

let firstName = "Rob";
// ! PROBLEM: Morning and Rob does not have a space
console.log(greeting + firstName)

// solution;
console.log (greeting + " " + firstName);
// ${} references variable. Can only be used with backticks.
let fullGreeting = `${greeting} ${firstName}`;

console.log(fullGreeting); //expected value = Good Morning Rob

// ! If you want to know what "TYPE" the variable is you can use the keyword typeof

console.log(typeof firstName);

let ship = "titanic";
ship.toUpperCase();

// To determine the size of the string you the .lenth method

let animal = "horse";
console.log(animal.length);
// Accessing the first letter it is zero based when it is a string
console.log(animal[0]);

let textData = "           Hello     ";

console.log(textData.trim());

// Add a new line to a sentence
let newLineString = "I went to the store yesterday. \nI bought eggs and milk";

console.log(newLineString)

// ! NUMBERS

let currentTemp = 38;

console.log(typeof currentTemp);

let funkyNumber = 0.2 = 0.1
console.log(funkyNumber)

let add1 = 2 + 1

console.log(add1)

let totalMoney = (1999 + 1599)/100

console.log(totalMoney)

// ! Be careful of mismatching Strings and Numbers

let myAge = "42"
let friendAge = 34

console.log(Number(myAge) + friendAge)                                                                                 
//ParseInt(myAge)
// Add a (+) before the string variable
console.log(+myAge + friendAge)
let stringNumber = "23"
let stringExample = "abc"

console.log(stringExample / 2);

// ! Number Operators
/* 
Adding numbers use (+)
Subtracting numbers use (-)
multiplying numbers use (*)
dividing numbers use (/)

Special Ones
Exponents use (**)
Modulus (AKA: The Remainder)
 */
// 3^3
console.log(3 ** 3)
// 21 / 10 = 2 R 1
console.log(21 % 10) //results: 1

// ? How can i tell if a number is even?
console.log("odd", 33 % 2) // results in a remainder of 1 so it is odd
console.log("even", 32 % 2) // result is a remainder of 0 so it is even

// ? How do I take what I had before and add to it
let totalPrice = 0
let item1 = 5
totalPrice = totalPrice = item1;
console.log(totalPrice)
let item2 = 10
totalPrice = totalPrice + item2
// totalPrice += item2
console.log(totalPrice)

// ! Booleans
// Booleans only have two possible values (true or false)

let isOver21 = true;

let isCloudy = false;

console.log(typeof isCloudy)
