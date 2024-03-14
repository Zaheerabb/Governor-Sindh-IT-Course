// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

// storing pizza names in array
let Pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];

// using for loop toitrate over array and using if else to print custom messsage for each pizza
for (let i = 0; i < Pizzas.length; i++) {
    if (Pizzas[i] == "pepperoni") {

        console.log(`My favourite pizza is ${Pizzas[i]}`);   
    
    } else if (Pizzas[i] == "hawaiian") {
        
        console.log(`I like ${Pizzas[i]} pizza`);   
        
    } else {
        console.log(`${Pizzas[i]} pizza is too good`);   
    }
}