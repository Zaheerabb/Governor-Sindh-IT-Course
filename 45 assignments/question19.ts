/*
 Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print
 a message indicating the number of people you are inviting to dinner.
*/

// storing guest names in  a array called guests
let guests: string[] = ["zaheer","qabool","wahab","jane","hammad"];

// printing number of guests
guests.forEach(guest=> {
console.log(`Hello ${guest}, I am inviting ${guests.length} peoples on a dinner`)}
)