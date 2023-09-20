//Object.assign()

// objectCombined is: { firstName: 'Santa', lastName: 'Claus' }

const objectOne = {
    firstName: 'Santa'
  }
  
  
  const objectTwo = {
    lastName: 'Claus'
  }
  
  
  const objectCombined = Object.assign(objectOne, objectTwo);
  console.log(objectCombined)


//   Object.entries()

// it converts objects into arrays of arrays.
//output [ [ 'name', 'William' ], [ 'age', 30 ] ]

let person = {
  name:"William",
  age:30
}


let entries = Object.entries(person);


console.log(entries);





// Object.keys()

// This method returns an array of the keys (or property labels) of a given object.
//  output ["winter", "spring", "summer", "fall"]


const seasonalColors = {
  winter: 'blue',
  spring: 'green',
  summer: 'yellow',
  fall: 'brown'
}


const types = Object.keys(seasonalColors);

console.log(types)


// Object.values()
// This method returns an array of the values of a given object.
// output ["blue", "green", "yellow", "brown"]

const seasonalColors1 = {
  winter: 'blue',
  spring: 'green',
  summer: 'yellow',
  fall: 'brown'
}


const colors = Object.values(seasonalColors1);
console.log(colors)