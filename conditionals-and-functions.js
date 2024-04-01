/*
 * Conditionals, Functions, Scope, and Loops.
 */

/*
//Initial Examples
// Equals
let equals = 1 === 1;
//console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or equal to
let greaterThanEq = 5 >= 5;

// Less than or equal to
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;




let storeA = 3.10;
let storeB = 3.10;

function compareStorePrices (storeA, storeB) {
    let storeAisLower = storeA < storeB;
    if (storeAisLower) {
        console.log("Store A has a lower price.");
    } else if (storeB < storeA) {
        console.log("Store B has a lower price");
    } else {
        console.log("Prices are equal");
    }
}

compareStorePrices(10, 5);
compareStorePrices(6, 70);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);
// Pre function code
let storeAisLower = storeA < storeB;

if (storeAisLower) {
    console.log("Store A has a lower price.");
} else if (storeB < storeA) {
    console.log("Store B has a lower price");
} else {
    console.log("Prices are equal");
}
*/

/*
// Javascript has three scopes, global, functional, block
let x = 10;
function addNumber(n, m, x) {
    console.log(x);
    let b;
    if (1 === 1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

let result = addNumber(4, 5, 10);
console.log(result);
 */

/* Simple arrays
                0, 1, 2, 3, 4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
console.log(ourArray[4][0]);
*/

/* Static size array printing with for loop
let ourArray = [1, 2, 3, 4, 5];

for(let i = 0; i < 5; i++){
    console.log("i is equal to: " + i);
    console.log(ourArray[i]);
}
*/

//* Dynamic Array size printing with for loop
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrayLength = ourArray.length
for(let i = 0; i < arrayLength; i++){
    //console.log("i is equal to: " + i);
    console.log('ourArray[' + i + '] = ' + ourArray[i]);
    for(let j = 0; j < 5; j++) {
        //console.log('j is equal to: ' + j);
    }
}
//*/

/* While loop
let x = 0;
while (x < 10) {
   console.log('Ran');
   x++;
}
*/