"use strict";
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirts(size = "large", message = "ERROR 404") {
    console.log(`make a ${size} size shirt and print ${message} on it`);
}
make_shirts(); // print deafult make shirts
make_shirts("small"); // default message for small size
make_shirts("medium", "Hello World!"); // default message for small size
