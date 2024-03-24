"use strict";
/*
 Question 13: Your Own Array: Think of your favorite mode of transportation,
 such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
*/
// storing transportation names in array
let favTranspotMode = ["helicopter", "Honda Civic", "Audi"];
// printing message with transportation names
favTranspotMode.forEach(transports => {
    console.log(`I would Like to own a ${transports}`);
});
