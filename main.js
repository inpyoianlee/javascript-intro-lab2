console.log("Lab Loaded");

// 0. Hello, object

// Write the code, one line for each action:

// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

// 1. Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    return arr.slice().sort();
}

let sorted = copySorted(arr)
alert( sorted );
alert( arr );


// 2. Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code */

alert( names ); // John, Pete, Mary

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

// alert( names );

// 3. Map to objects
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// So, actually you need to map one array of objects to another. 

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

function userMap (user) {
    return {fullName: user.name + ' ' + user.surname, id: user.id};
}

let usersMapped = users.map(userMap);

alert( usersMapped[1].id ) // 1
alert( usersMapped[1].fullName ) // John Smith

// 4. Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortByAge = (users) => {
    return users.sort((a,b) => (a.age - b.age));
}

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

// 5. Get average age

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = (users) => {
    let userAges = users.map(user => parseInt(user.age));
    let length = userAges.length;
    let totalAge = 0;
    for (let age of userAges) {
        totalAge = totalAge + age;
    }
    return totalAge / length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// 6. Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

function unique(arr) {
    let uniqueStrings = arr.filter((string, index) => {
        return arr.indexOf(string) === index;
    });
    return uniqueStrings;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );

// 7. Sum object properties

// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;

for (const name in salaries) {
    sum = sum + salaries[name];
};
alert(sum);

// 8. Multiply numeric properties by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj) => {
    for (const property in obj) {
        if ( typeof(obj[property]) == 'number' ) {
            obj[property] = obj[property] * 2;
        }
    }
    return obj;
}

console.log(multiplyNumeric(menu));

// 9. Create new Accumulator
  
//   Create a constructor function Accumulator(startingValue).
  
//   Object that it creates should:
  
//   Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//   The read() method should use prompt to read a new number and add it to value.
//   In other words, the value property is the sum of all user-entered values with the initial value startingValue.
  
//   Here’s the demo of the code:
  
//   let accumulator = new Accumulator(1); // initial value 1
//   accumulator.read(); // adds the user-entered value
//   accumulator.read(); // adds the user-entered value
//   alert(accumulator.value); // shows the sum of these values

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        let newNum = parseInt(window.prompt("Enter a new number:"));
        this.value = this.value + newNum;
    }
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values