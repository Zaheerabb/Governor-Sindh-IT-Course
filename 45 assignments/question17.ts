/*
 Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, 
 and you can only invite two guests.
*/
// storing names in array
let Guestss:string[] = ["Dur Muhammad","Nade Ali","Jane","Qabool"];

// removing extra guests using while loop
while (Guestss.length > 2) {
    let canNotInvite = Guestss.pop();

    // printing sorry message for not invited friends
    console.log(`Sorry ${canNotInvite}, I can't invite you for dinner`); 
}

// printing sorry message for not invited friends
Guestss.forEach(guestt => {
    console.log(`Hello ${guestt}, You are still invited for a dinner`);
})
