// push: 


// Adds one or more elements to the end of an array.
// output [ 'apple', 'banana', 'orange' ]

const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits)


// pop:


//  Removes the last element from an array and returns it.
// output ["apple", "banana"]


const fruits1 = ["apple", "banana", "orange"];
const lastFruit = fruits1.pop();
console.log(lastFruit)

// unshift:


//  Adds one or more elements to the beginning of an array.
//  output ["apple", "banana", "orange"]


const fruits2 = ["banana", "orange"];
fruits2.unshift("apple");
console.log(fruits2)



// shift:


//  Removes the first element from an array and returns it.
// output ["banana", "orange"]

const fruits3 = ["apple", "banana", "orange"];
const firstFruit = fruits3.shift();
console.log(firstFruit)


// forEach:


//  Executes a provided function once for each array element.
// // Outputs: 1, 2, 3

const numbers = [1, 2, 3];
numbers.forEach((number)=> {
  console.log(number);
});

// map: 


// Creates a new array by calling a provided function on every element in the array.
//  doubledNumbers is [2, 4, 6]

const numberss = [1, 2, 3];
const doubledNumbers = numberss.map((number)=> {
  return number * 2;
});
console.log(doubledNumbers)


// filter:
//  Creates a new array with all elements that pass the test implemented by the provided function.
// output is even

const numbers11 = [1, 2, 3, 4, 5];
const evenNumbers = numbers11.filter((number)=> {
  return number % 2 === 0;
});
console.log(evenNumbers)


// reduce:
//  Applies a function to accumulate a single result from an array.


const numbers111 = [1, 2, 3, 4, 5];
const sum = numbers111.reduce((a, b) =>{
  return a + b;
}, 0);
console.log(sum)


// some:
//  Checks if at least one element in the array satisfies a provided condition.


const numbers22 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers22.some((number) =>{
  return number % 2 === 0;
});
console.log(hasEvenNumber)


// every:
//  Checks if all elements in the array satisfy a provided condition.


const numbers33 = [2, 4, 6, 8];
const allEvenNumbers = numbers33.every((number)=> {
  return number % 2 === 0;
});

// find: 
// Returns the first element in the array that satisfies a provided condition.


const numbers44 = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers44.find((number) =>{
  return number % 2 === 0;
});
console.log(firstEvenNumber)


// findIndex: 
// Returns the index of the first element in the array that satisfies a provided condition.


const numbers77 = [1, 2, 3, 4, 5];
const indexOfFirstEvenNumber = numbers77.findIndex((number) =>{
  return number % 2 === 0;
});
console.log(indexOfFirstEvenNumber)


// Split:
//  Splits a string into an array of substrings based on a specified delimiter.


const sentence = "Hello, world!";
const words = sentence.split(" "); // ["Hello,", "world!"]
console.log(words)

// Ternary Operator:
//  A concise way to write conditional expressions.



const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote)

// includes:
//  Checks if an array includes a specific element.


const fruits12 = ["apple", "banana", "cherry"];
const includesBanana = fruits12.includes("banana"); // true
console.log(includesBanana)

// trim: 
// Removes whitespace (spaces, tabs, and line breaks) from the beginning and end of a string.


const str = "   Hello, World!   ";
const trimmedStr = str.trim(); // "Hello, World!"
console.log(trimmedStr)