// Question 36: T-Shirt: Create a function for customizing t-shirts.

let sizes: string[] = ["small", "medium", "large"]; // storing sizes for shirts in array
let messages: string[] = ["I love coding", "#100daysofcodechallenge"]; // storing messsages that we print shirts in array

// creating a function to make shirts
function makeShirts(size: string, message: string) {
  console.log(`\nmake a shirt of ${size} size and print ${message} on that`);
}

// using forEach loop to print message according to their size
sizes.forEach((size) => {
  if (size == "small") {
    makeShirts(size, messages[0]);
  } else {
    makeShirts(size, messages[1]);
  }
});
