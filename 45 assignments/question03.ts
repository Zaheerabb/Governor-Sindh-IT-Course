/*
Question 3: Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
// storing person name to variable personsName 
let personsName:string = "zaheer";
console.log(`UpperCase: ${personsName.toUpperCase()}`); //converting name to upper case
console.log(`LowerCase: ${personsName.toLowerCase()}`); //converting name to lower case
//converting name to title case
console.log(`TitleCase: ${personsName.charAt(0).toUpperCase() + personsName.slice(1).toLowerCase()}`);