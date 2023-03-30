/* 
Hoisting:

let and const do not get hoisted

var will get hoisted and if you access it before it is initialized and assigned you will get an undefined.
*/

console.log(firstName);
// let firstName = "Rob"

var firstName = "Rob";

/* 
SCOPE:

Var vs Let
- the introduction of ES6 came the introduction of let and const
- Using Let or Const you can NOT reference a variable before it is initialized.


- When it comes to scope, JS will try to look for the variable in it's current block first, then it will look outwards.

_ A variable created in a code block cannot be accessed outside of the block.

- JS has three types of scope: 
    - Block scope
    - Functional scope
    - Global scope

- Var keyword cannot have block scope

*/

function greeting() {
  console.log("Good afternoon " + firstName);
}

greeting();

function greeting2() {
  let firstName = "Jimbo";
  console.log("Good afternoon " + firstName);
}
// ? What first name will it use?
greeting2();

// ? Do i get Rob or Jimbo?
console.log(firstName);

function greeting3() {
  firstName = "Betty";
  console.log("Good afternoon " + firstName);
}
//? What first name will it use?
greeting3();

//? What first name will I get rob or betty?
console.log(firstName);

function greeting4(firstName) {
  console.log("Good afternoon " + firstName);
}

greeting4("Barney");

var x = 12;

function varTest() {
  var x = 33;
  if (1 == 1) {
    var x = 45;
    console.log(x); //45?
  }
  console.log(x); // 33 or 45?
}

console.log(x); //12?
varTest();

function varTest2() {
  if (1 == 1) {
    var y = 200;
  }
  console.log(y);
}

varTest2();
