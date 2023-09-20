// 1  charAt(index): 

// Returns the character at the specified index in a string.


const str1 = "Hello, World!";
const character = str1.charAt(0); // Returns "H"
console.log(str1)

// 2  length:

//  Returns the length of a string.


const str = "Hello, World!";
const length = str.length; // Returns 13
console.log(str)

// 3  toUpperCase() and toLowerCase() 


// Converts a string to uppercase or lowercase.


const str2 = "Hello, World!";
const upperCase = str2.toUpperCase(); // Returns "HELLO, WORLD!"
const lowerCase = str2.toLowerCase();
console.log(upperCase)


// 4  split(separator)
//  Splits a string into an array of substrings based on the specified separator.

const str4 = "apple,banana,orange";
const fruits = str4.split(","); // Returns ["apple", "banana", "orange"]
console.log(fruits)


// 5 replace(searchValue, replaceValue) 

// Replaces the first occurrence of a specified value in a string with another value.


const str5 = "Hello, World!";
const replacedStr = str5.replace("Hello", "Hi"); // Returns "Hi, World!"
console.log(replacedStr)


// 6 substring(startIndex, endIndex):

//  Extracts a portion of a string between the specified start and end indexes.


const str6 = "Hello, World!";
const subStr = str6.substring(0, 5); // Returns "Hello"
console.log(subStr)

// 7 concat(str2, str3, ...): 

// Combines two or more strings and returns a new string.


const str11 = "Hello, ";
const str22 = "World!";
const combinedStr = str11.concat(str22); // Returns "Hello, World!"
console.log(combinedStr)