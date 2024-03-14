/*
 Question 16: More Guests: You just found a bigger dinner table, so now more space is available. 
 Think of three more guests to invite to dinner.
*/
// storing names in array
let Guests:string[] = ["Dur Muhammad","Nade Ali","Jane","Qabool"];

// printing message for big table
console.log("Here is a good news, I found a bigger table\n");

Guests.splice(Guests.length/2,0,"hammad"); //adding name in middle of array
Guests.unshift("abdullah"); //adding name in start of array
Guests.push("Nazar"); //adding name in last of array

// printing message for dinner with new persons
Guests.forEach(guest =>
{
    console.log(`Dear ${guest},I am inviting you to a dinner`);
});