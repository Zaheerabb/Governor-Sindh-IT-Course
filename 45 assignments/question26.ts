/*
Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
*/

// assign value to a variable alien_color
let alien_coloor: string = "yellow";

// when alien_color is yellow then this run if function
if (alien_coloor == "yellow") {
  console.log("you got 5 points!");
} else {
  console.log("you missed the shot!");
}

// re-assign value to a variable alien_color
alien_coloor = "black";

// when alien_color is not yellow then this run else function
if (alien_coloor == "yellow") {
  console.log("you got 5 points!");
} else {
  console.log("you missed the shot!");
}
