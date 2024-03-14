/*
 Question 14: Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to 
 invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
// storing names in array
let Guestsss:string[] = ["Dur Muhammad","Nade Ali","Jane"];

// printing message for dinner with names save in array
Guestsss.forEach(guest =>
{
    console.log(`Dear ${guest},I am inviting you to a dinner`);
});