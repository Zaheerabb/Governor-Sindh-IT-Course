"use strict";
/*
Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

*/
let Numbers = [1, 2, 4, 5]; //storing numbers in array
let suffix; // declaring suffix
// using for loop to itrate array
for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] == 1) { // if array value is equal to 1 then change suffix value to st
        suffix = "st";
    }
    else if (Numbers[i] == 2) { // if array value is equal to 2 then change suffix value to nd
        suffix = "nd";
    }
    else if (Numbers[i] == 3) { // if array value is equal to 3 then change suffix value to rd
        suffix = "rd";
    }
    else { // if array value is other than 1,2 and 3 then change suffix value to th
        suffix = "th";
    }
    console.log(`${Numbers[i]}${suffix}`);
}
