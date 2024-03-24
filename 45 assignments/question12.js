"use strict";
/*
 Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
 print a message to them. The message should be the same for each person,
 but personalized with their name.
*/
// storing names in array
let Names = ["Hammad", "Dur", "Tameer"];
// printing that names using for loop
for (let i = 0; i < Names.length; i++) {
    console.log(`Good morning ${Names[i]}`);
}
