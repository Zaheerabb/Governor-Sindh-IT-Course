// Question 39: City Names: Formatting city-country pairs.

// cretinga function cityAndCountry with defaulted values
function cityAndCountry(city:string = "karachi",country:string = "pakistan"):string {
    return `${city} is a city of ${country}`;
}
console.log(cityAndCountry()); // city and country with default values
console.log(cityAndCountry("Istambol","turkey")); // city and country with given values
console.log(cityAndCountry("NewYork","America")); // city and country with given values