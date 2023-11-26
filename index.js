/* // Task 1: Introduction

console.log('Hello ES6! Im so powerful');

// ---------------------------------------------
// Task 2: Variables (let) and Scoping
var dogo = 'Akita';
console.log(dogo)
var dogo ='Shibita'
console.log(dogo)
dogo='Chow Chow'
console.log(dogo)

let cate = 'British Shorthair'
console.log(cate)
1
var dogo = 'Akita';
function printbREED(){
    let dogo='cocker spaniel';
    console.log('inside '+dogo)
}

printbREED();
console.log('outside: ' +dogo)

for(var i=0; i<2; i++){
    var parrot='Hey!'
}

console.log(parrot);
console.log(i)

// Task 2: Execise 1: Fix the code to print 15

let age = 15;

for (let age = 1; age <= 10; age++) {
    console.log(age);
}

console.log(age); // Should print 15 instead of 10 */

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

/* let myDog = "Jack Russell Terrier";
let shortLeggies = true;

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier */

// ---------------------------------------------
// Task 3: Variables (const) and Immutability

/* const paintings = [
    'tHe starry night',
    'the night cafe'
];
paintings.push('Irises')
console.log(paintings)
paintings[0]='Almond Blossoms'
console.log(paintings) */

const paintingsInformation={
    name: "Starry Night",
    painter: "Van Gogh",
    location: {
        museaum: "MoMA",
        city: "New YORK city"
    }
}
Object.freeze(paintingsInformation)
Object.freeze(paintingsInformation.location)

paintingsInformation.year = 1889;
paintingsInformation.name = "THE " + paintingsInformation.name
paintingsInformation.location.country = 'USA'
console.log(paintingsInformation)
