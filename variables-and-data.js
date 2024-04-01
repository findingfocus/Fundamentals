/*
 * Variables, Data Types, and Typing
 * Primitive types include boolean, null, undefined -set by JavaScript, number, strings
 * Composite types include objects
 */

// Print out example variables and object data
let wordData= "This is an example string";

console.log(wordData);

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = tax + subTotal;

let obj = {
    key1: "value",
    key2: 3,
    obj2: {
        obj2Key1: "Internal Object Value",
    }
};

console.log("Print nested object data: " + obj.obj2.obj2Key1);

// Operation Examples
let add = 1 + 2;
let sub = 2 - 1;
let mult = 2 * 4;
let division = 4 / 2;
let mod = 5 % 2;

let string  = "String 1 " + "String 2";

console.log("Concatenation example: " + string);

// Weak typed language example of type conversion
let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log("Type conversion bug: " + result);