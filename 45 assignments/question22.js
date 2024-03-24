"use strict";
/*
Question 22: Intentional Error: Try to produce an array index error in one of your programs.
Correct the error before finishing.
*/
let Names_array = ["Zaheer", "Jane", "Dur", "qabool"];
// intentional error: in above array 4 doesn't exisit because array start from 0, 
// so above array have numbers from 0 to 3
console.log(Names_array[4]);
// Now I correct the error by access the exisiting number
console.log(Names_array[1]);
