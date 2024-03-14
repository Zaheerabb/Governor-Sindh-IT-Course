/*
Question 29: Favorite Fruit: Create an array for your favorite fruits and 
check if certain fruits are included.
*/
// storing fruits names in array
let fruits:string [] = ["mango","apple","orange","banana"];

for (let i = 0; i < fruits.length; i++) {
    // const element = array[i];
    
    if (fruits[i] == "mango") {
        console.log("mango is available");
    }
    else if (fruits[i] == "apple") {
        console.log("apple is available");
    }
    else if (fruits[i] == "banana") {
        console.log("banana is available");
    }
    else if (fruits[i] == "orange") {
        console.log("orangee is available");
    }
     else {
        console.log("that fruit doesnot available");
    }
}