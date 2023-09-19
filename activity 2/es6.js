// let and var

var x = 10;

{
  let x = 2;

}

console.log(x)

// const 

var y = 10;

{
   const y = 2;

}
console.log(y)


// Map

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("apples"))

// classes

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(){
    return "My car is " + this.name + " and "+ this.year+ " years old.";
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);


console.log(myCar1.age())
console.log(myCar2.age())

// rest 

const adding =(...a)=>{
   let sum = 0;
   for (let i of a) {
     sum += i;
   }
   return sum;

}
console.log(adding(1,2,3,4))


// arrow function 


let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1);


// Destructuring

// (1)

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;

console.log(car)

// (2)

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);

  console.log(add)

// (3)
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
  const a=myVehicle(vehicleOne);


  function myVehicle({type, color, brand, model}) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';

    return message
  }

  console.log(a)

// Spread Operator

// (1)
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)

// (2)

const myVehicle1 = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle1, ...updateMyVehicle}
  console.log(myUpdatedVehicle)


  