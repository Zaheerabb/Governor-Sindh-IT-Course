"use strict";
/*
Question 3: Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
// storing person name to variable personsName 
let personsName = "zaheer helloh";
// let Hupeercased:string = "";
// function hUpper(Name:string) {   
//     for (let i = 0; i < Name.length; i++) {
//         if (Name.charAt(i) == "h") {
//             // console.log(Name.slice(i).toLowerCase() + Name.charAt(2).toUpperCase() + Name.slice(i+1).toLowerCase());
//             Hupeercased += Name.charAt(i).toUpperCase();
//         }
//         else{
//             Hupeercased += Name.charAt(i).toLowerCase();
//         }
//     }
//     console.log(Hupeercased);
// }
// hUpper(personsName);
console.log(`UpperCase: ${personsName.toUpperCase()}`); //converting name to upper case
console.log(`LowerCase: ${personsName.toLowerCase()}`); //converting name to lower case
// converting name to title case
console.log(`TitleCase: ${personsName.charAt(0).toUpperCase() + personsName.slice(1).toLowerCase()}`);
