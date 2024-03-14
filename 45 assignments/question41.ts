/*
Question 41: Magicians: Make an array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.
*/

// storing magicians names in array
let magicianNames:string[] = ["zaheer","abdul","jane"];

// creating a function that takes string and print that string 
function show_magicians(magician:string[]) {

    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}

// passing magicianNames arry to show_magician function
show_magicians(magicianNames);