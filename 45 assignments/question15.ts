/*
 Question 15: Changing Guest List: One of your guests can't make it to the dinner, 
 so you need to send out a new set of invitations with a replacement guest.
*/
// storing names in array
let Guestss:string[] = ["Dur Muhammad","Nade Ali","Jane"];

// jane is not joining us for a dinner, so remove him and add new person
Guestss[Guestss.indexOf("Jane")] = "Qabool Muhammade";

// printing names for dinner with new person
Guestss.forEach(guest =>
{
    console.log(`Dear ${guest},I am inviting you to a dinner`);
});