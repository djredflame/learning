// Import the classes
import Person from './Classes/Person.js';
import Car from './Classes/Car.js';

// Using the class Person
const max = new Person(`Max`, `Musterman`, 25, `Male`);

// Using the class Car to create object
const nora = new Car(`Nora`, `Musterfrau`, 21, `Female`, 
`Audi`, `R8`, `R8 Coupe`, `4.2 FSI V8`, 2006, 2010, `Coupe`, 2, 2, 301);

const nina = new Car(`Nina`, `Musterfrau`, 18, `Female`,
`BMW`, `Z4`, `Z4 (E89)`, `35i sDrive`, 2010, 2013, `Cabriolet`, 2, 2, 250);

// Create array with the objects
const personsWithCars = [{name: nora}, {name: nina}];

// Amount of km's
let km = 1000;

/* Make a function that takes the km and the array and returns the amount of hours it 
needs at max speed for each item in the array */

function howLongDoesItTake(_km, array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        let obj = {};
        obj['name'] = array[i].name._name;
        obj['hours'] = Math.round((60 / array[i].name._maxSpeed) * km) / 60;
        result.push(obj);
    }
    return result;
}

let itTakes = howLongDoesItTake(km, personsWithCars);

for(let i = 0; i < itTakes.length; i++){
    console.log(`${itTakes[i].name} needs for ${km} km ${itTakes[i].hours} hours`);
}
