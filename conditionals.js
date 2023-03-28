/* 
CONDITIONALS:
-We use conditionals whenever a decision needs to be made.
-The conditions need to either be truthy or falsey
-Tools we have available are the following
    - if statements
    - Ternary
*/

// ? Create an if statement for the condition using a 24hr clock. If it's before 12 console.log("Good Morning!").

let currentHour = 19;

console.log(currentHour < 12);
/* 
1. keyword - if to the if statement
2. conditional - must result in a truth */
// prettier-ignore
if (currentHour < 12) {
    // (1)   (2)
    // inbetween the brackets is considered a block of code
    // this block of code will be executed if the conditional is true.
  console.log("Good Morning");
}

// ! Example of if - else statement

if (currentHour < 12) {
  console.log("Good Morning!");
} else {
  console.log("Good Afternoon");
}

// ! Example of if - else if - else statements
// ? If the hours are between 12-5pm the greeting should be "Good Afternoon" and if it's between 5-12am the greeting should be "Good Evening"

if (currentHour < 12) {
  console.log("Good Morning");
} else if (currentHour < 17) {
  console.log("Good Afternoon (if-else-if)");
} else {
  console.log("Good Evening (else statement)");
}

// ? Write a conditional based on age that will store in a variable the price of the movie ticket;
//  Child Price = 5 (age 10)
// adult price = 10
// senior price = 8 (age 55)
// Addon challenge:
// Add a military discount to senior and adult tickets of 1 dollar

let age = 17;
let priceOfTicket = 0;
let isMilitary = true;

// If statements
if (age >= 55) {
  priceOfTicket = 8;
  isMilitary == true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
} else if (age <= 10) {
  priceOfTicket = 5;
} else {
  priceOfTicket = 10;
  isMilitary == true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
}
// console.log(priceOfTicket)

console.log("Price of the ticket is: $" + priceOfTicket);

// ! Ternaries

/* 
    1. Conditional that will result in a true or false
    2. Add a (?) and what is on the right side of the ternary up to the colon is what will happen if it is true
    3. Code for the truth
    4. Truth and False divider
    5: Code for the false

        (1)              (2)     (3)
     isMilitary == true  ? (priceOfTicket = priceOfTicket - 1)
     (4)            (5)
    : (priceOfTicket = priceOfTicket);
*/

// ? Write an if else statement to determine if the current seconds are odd or even.
// ? If it's even console.log("The current second is ${value} and it is even.")
// ? If it's odd console.log("The current second is ${value} and it is odd.")

// ! BONUS: See if you can create a ternary to solve this...

const d = new Date();
let seconds = d.getSeconds();

// if (seconds % 2 == 0) {
//   console.log("The current second is " + seconds + " and it is even.");
// } else {
//   console.log("The current second is " + seconds + " and it is odd.");
// }

seconds % 2 == 0
  ? console.log("The current second is " + seconds + " and it is even.")
  : console.log("The current second is " + seconds + " and it is odd.");

//  console.log(seconds);

// ! Switches
// Breaks are needed. Will bleed to next case if no break.
// No break for or statement
let randomNum = 2;
let color = "";
switch (randomNum) {
  case 1:
    color = "red";
    break;
  case 2:
    color = "blue";
    break;
  case 3:
    color = "pink";
    break;
  case 4:
    color = "purple";
    break;
  case 5:
    color = "white";
    break;
  case 6:
    color = "green";
    break;
  default:
    color = "unknown";
}

console.log(color);
