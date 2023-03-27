//  3 ways to declare variables [var, let, or const]
//  Javascript ends with a semicolon (however they are optional)

// prettier-ignore
   var   firstName   =   "Rob";
// (1)     (2)     (3)  (4)

/*
1. Js keyword denotes the creation of the variable (var, let, or const)
2. The name of the variable that the developer will reference in order to use the value that is stored.
3. Assignment operator
4. Initial value it gets set to.
*/

console.log("firstName", firstName);

//  ! JS variables are CASE SENSITIVE

//console.log("firstName", FirstName); //code breaks, casing matters

// ? Reassignment of a variable
// No need for a [var, let or const] because the variable has already been declared
// Only the variable name forr by an = you can reassign the value.

// ! using var and let you CAN reassign however using const you CANNOT

firstName = "Jordan"
console.log("firstName", firstName);

// CONST  exampler

const pi = 3.14;

// pi = 4.2; //error cannot reassign a const

// ? Can you declare a variable with assigning it?

var lastName;
console.log("lastName", lastName)

lastName = "Smith";

console.log("lastName", lastName)

// naming your variable is important. Stay away from single letters

// 60 * 60 * 24
let seconds = 60
let minutes = 60
let hours = 24
let totalSeconds = seconds * minutes * hours
console.log("totalSeconds", totalSeconds)

// ? Create variable used to store a current temperature, console.log the current temp.

currentTemp = "38 F"

console.log(currentTemp)