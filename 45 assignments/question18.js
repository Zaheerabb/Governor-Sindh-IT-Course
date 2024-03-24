"use strict";
/*
Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/
// storing favourite places names in array called favPlaces 
let favPlaces = ["Makkah", "Istambol", "Swizerland", "Hunza", "Newyork"];
console.log("original order:", favPlaces); // printing original order
console.log("Alphabetical order:", [...favPlaces].sort()); // printing alphabatical order
console.log("reversed alphabetical order:", [...favPlaces].sort().reverse()); // printing reversed alphabatical order
console.log("reversed order:", [...favPlaces].reverse()); // printing reversed order
