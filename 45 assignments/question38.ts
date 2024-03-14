//Question 38: Cities: Describing cities with a function.

// function with default values that can get input city names and message for city and print that city with message
function cities(city:string = "Hunza", describeCity:string = "Hunza is such a beautiful city") {
    console.log(`${city},${describeCity}`);
}
cities(); // print with its default values
cities("Karachi","karachi is largest city of pakistan"); // print karachi city and that given message 
cities("Islamabad","Islamabad is capital city of pakistan"); // print islamabad city and that given message
