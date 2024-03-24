"use strict";
/*
Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
*/
// setting person's age in a variable age
let age = 19;
// human life stage using if else
if (age < 2) {
    console.log("person is a baby");
}
else if (age > 2 && age < 13) {
    console.log("person is a kid");
}
else if (age > 13 && age < 20) {
    console.log("person is a tenager");
}
else if (age > 20 && age < 40) {
    console.log("person is a adult");
}
else if (age > 40 && age < 65) {
    console.log("person is a elder");
}
else {
    console.log("person is dead");
}
