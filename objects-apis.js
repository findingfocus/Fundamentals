/*
 * Objects, Interfaces, and API's
 * Objects contain data and functionality
 */

/* Simple Objects
let dog = {
    name: "Sypha",
    color: "brown",
    breed: "German Shepard",
    size: "Medium",
    bark: function (typeOfBark){
        console.log("Bark!");
    },
};

dog.bark();
//*/

//* Function variables are passed in by value, Objects are passed in by reference
function x(y) {
    y.number = y.number + 5;
    console.log(y);
}

let y = {
    name: "Tom",
    number: 10,
}
x(y);
console.log(y);
//*/