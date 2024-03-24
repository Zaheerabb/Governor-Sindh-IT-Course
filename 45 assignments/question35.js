"use strict";
// Question 35: Animals: Highlight animals with a common trait.
// storing animal names in array
let animals = ["cat", "dog", "lion"];
// printing message for each animal and using if else to print message according to animal type
animals.forEach(animal => {
    if (animal == "lion") {
        console.log(`some people pet a ${animal} but mostly don't`);
    }
    else {
        console.log(`${animal} is most common pet`);
    }
});
