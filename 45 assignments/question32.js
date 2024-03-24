"use strict";
/*
Question 32: Checking Usernames: Ensure uniqueness in usernames.
*/
// storing usernames in array
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
// using for loop to itrate over array
for (let i = 0; i < current_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) { // if user of new_users present in current users the print this message
        console.log(`${new_users} will need to enter a new username.`);
    }
    else {
        console.log(`${new_users} is available.`); // if user of new_users doesn't present in current users the print this message
    }
}
;
