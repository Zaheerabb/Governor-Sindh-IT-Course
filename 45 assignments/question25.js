"use strict";
/*
Question 25: Alien Colors #1: Imagine an alien was just shot down in a game.
Assign 'green', 'yellow', or 'red' to a variable called alien_color.
*/
// assign value to a variable alien_color
let alien_colorr = "red";
// when alien_color is red then we print this message
if (alien_colorr == "red") {
    console.log("You jus earn 1 point!");
}
// re-assign alien color
alien_colorr = "green";
// when alien_color is not red then we print this message
if (alien_colorr !== "red") {
    console.log("you miss a shot!");
}
