/*
 Question 6: Stripping Names: Store a person’s name, and include some whitespace characters
 at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. 
 Print the name once, so the whitespace around the name is displayed. Then print the name 
 after stripping the white spaces.
*/
// storing person name with extra spaces to variable Name 
let Name = "\t\nZaheer\t\n";

// printing that persons name and removig that extra spaces
console.log(`before:${Name}\nAfter:${Name.trim()}`);
