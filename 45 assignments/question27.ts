/*
Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
*/

// assign value to a variable alien_color
let alien_coolor: string = "yellow";

// when alien_color is yellow then this run if function
if (alien_coolor == "yellow") {
  console.log("you got 5 points!");
} else if (alien_coolor == "green") {
  console.log("you got 10 points!");
} else if (alien_coolor == "red") {
  console.log("you missed the shot!");
}

// when alien color green
alien_coolor = "green";

if (alien_coolor == "yellow") {
  console.log("you got 5 points!");
} else if (alien_coolor == "green") {
  console.log("you got 10 points!");
} else if (alien_coolor == "red") {
  console.log("you missed the shot!");
}

// when alien color is red
alien_coolor = "red";

if (alien_coolor == "yellow") {
  console.log("you got 5 points!");
} else if (alien_coolor == "green") {
  console.log("you got 10 points!");
} else if (alien_coolor == "red") {
  console.log("you missed the shot!");
}
