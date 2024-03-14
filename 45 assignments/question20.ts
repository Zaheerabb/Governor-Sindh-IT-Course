/*
Question 20: Think of something you could store in an array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, 
or anything else you’d like. Write a program that creates a list containing these items.
*/

//storing countries names in  a array called favCountries
let favCountries:string[] = ["Turkey","Swizerland","Japan","Pakistan","Iran","thailand"];

// printing message for each country using for loop
for (let i = 0; i < favCountries.length; i++) {
    
    console.log(`I would like to visit ${favCountries[i]}`);

}