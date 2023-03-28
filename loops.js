/* 
LOOPS:
Loops offer us a quick and easy way of doing something repeatedly.

There are many kinds of loops:
- For statement
- While loop
*/

// ! DANGER: There is a danger of being stuck in an infinite loop!
/* 
1: Sets the variable before the loop starts (initializes variable)
2: Conditional - run the loop until the statement is false
3: Counter - setting up the counter to add to the variable you set up in (1) 
*/
//       (1)       (2)     (3)
// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i);
// }

// How to display individual characters of a string using a loop.

// let word = "Indianapolis";
// console.log(word.charAt(0));
// for (let i = 0; i < word.length; i++) {
//   console.log(word.charAt(i));
// }

// ? Make a pyramid using a loop.
// Create a variable to hold the symbol of the (#)
// Create a variable to tell the loop how tall you want it
// Inside the loop we want to take whatever loop number we are on and console log that many symbols
let hashTag = "#";

// height = i
for (let i = 0; i <= 10; i++) {
  console.log(hashTag.repeat(i));
}
/* ex.
#
##
###
####
 */

// ! While loops

// Loops that will continue as long as the condition is true

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
