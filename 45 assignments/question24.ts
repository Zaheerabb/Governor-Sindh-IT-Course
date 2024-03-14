/*
Question 24: More Conditional Tests: Expand your conditional tests to cover 
a wider range of comparisons.
*/

// conditions with strings
console.log("\nconditions with strings");
console.log("car == Car ", `"False"`);
console.log("boy == boy ", `"True"`);

// string conditions using lowercase function
console.log("\nconditions with strings");
console.log("Car".toLowerCase() == "car", `"True"`);

// Numarical conditions
console.log("\nNumarical conditons test");
console.log("5 == 6", `"False"`);
console.log("6 == 6", `"True"`);
console.log("2 > 6", `"False"`);

// Test whether an item is in a array
console.log(
  "\nTest whether an item is in a array and whether an item is not in a array"
);
let company: string[] = ["Hp", "lenovo"];
console.log(company.includes("dell"), `"False"`); // Is dell in company

// Test whether an item is not in a array
console.log(
  "\nTest whether an item is in a array and whether an item is not in a array"
);
console.log(!company.includes("Hp"), `"False"`); // Is hp not in company
