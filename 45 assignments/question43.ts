/*
Question 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array 
to show that you have one array of the original names and one array with the Great added to 
each magician’s name.
*/
let Unchanged:string[] = ["zaheer","abdul","jane"];
let changedArray:string[] = [];

// creating a function that takes string and print that string 
function make_great(magician:string[]) {

    for (let i = 0; i < magician.length; i++) {
        
        // pushing magicians with great to changedArray
        changedArray.push(`Great ${magician[i]}`);
    }
}
make_great(Unchanged);

function show_magicians(magician:string[]) {

    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(Unchanged);
show_magicians(changedArray);