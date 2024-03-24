"use strict";
/*
Question 30: Hello Admin: Greet users differently, especially 'admin'.
*/
let userNames = ["zaheer", "qabool", "admin"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames[i]}, how are you?`);
    }
}
