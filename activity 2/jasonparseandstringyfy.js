//  jason.parse



// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.

// Parse the data with JSON.parse(), and the data becomes a JavaScript object.




const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj)


// jason.stringify


// A common use of JSON is to exchange data to/from a web server.

// When sending data to a web server, the data has to be a string.

// Convert a JavaScript object into a string with JSON.stringify().




const data = { name: 'John', age: 30, city: 'New York' };
const strig=JSON.stringify(data)
console.log(strig)