'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/
/*
function logger() {
  console.log('My name is Sam')
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 0);
const appleJuice = fruitProcessor(7, 9);
console.log(appleJuice);
console.log(fruitProcessor(7, 9));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration 
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirementAge = 65 - age;
  // return retirement age;
  return `${firstName} retires in ${retirementAge} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
  return fruit * 4;
}


function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirementAge = 65 - age;
  
  if(retirementAge > 0) {
    return retirementAge;
    // console.log(`${firstName} retires in ${retirementAge} years`);
  } else {
    return -1;
    // console.log(`${firstName} has already retired `)
  }
  // return `${firstName} retires in ${retirementAge} years`;
}

console.log(yearsUntilRetirement(1991, `Jonas`));
console.log(yearsUntilRetirement(1970, `MIKE`));
*/

/*
const calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage(10, 10, 10));

// Data test 1
let scoreDolphins = calcAverage(44, 23, 71);
console.log(scoreDolphins)

let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas)

const checkWinner = (avgDolhins,avgKoalas) => {
   if (avgDolhins >= 2 * avgKoalas) {
      console.log('Dolhins WINS');
   } else if (avgKoalas >= 2 * avgDolhins) {
      console.log('Koalas WINS')
   }  else {
     console.log('No team Wins')
   }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(9000,133)

// Data test 2

scoreDolphins = calcAverage(85, 54, 41);
console.log(scoreDolphins)

scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas);


// Introduction to array

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'peter';

const friends = ['Michael', 'Steven', 'peter'];
console.log(friends)

// Another method of making an array 
const y = new Array(20020, 213, 2133)
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1])

friends [2] = 'Jay'
console.log(friends)

const firstName = 'jonas'
const jonas = [firstName, 'schmedtmann', 2037 - 1991, 'Teacher', friends];
console.log(jonas)
console.log(jonas.length)

// Exercise
const calcAge = function (birthyear) {
  return 2037 - birthyear;
}

const years =  [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)

// Basic Array method 
const friends = ['Michael', 'Steven', 'peter'];

// Add elements to array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements from array
friends.pop() // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
  console.log(`You have a friend called Steven`)
}

// Coding Challenge#2

const calcTip = bill => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);



const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

// Introduction to Objects
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
  

console.log(jonas)

// Using the DOT & BRACKET NOTATION to get the property of an object

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends');


if(jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, friends')
}

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// 'Jonas has 3 friends and his best friend is Michael'

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthyear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
    // return 2037 - birthYear;
  // }
  // calcAge: function() {
  //   console.log(this);
  //   return 2037 - this.birthyear;
  // }

  calcAge: function() {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
  getSummary: function() {
    return (`${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' 
  } driver's license`)
  
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'
} driver's license`) // another method


console.log(jonas.getSummary());


// coding Challenge 3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    const bmi = this.mass / (this.height ** 2);
    return bmi;
  }
}
console.log(mark.calcBMI());


const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    const bmi = this.mass / (this.height ** 2);
    return bmi;
  }
}
console.log(john.calcBMI());


if (mark.bmi > john.bmi){
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`)
} else {
  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`)
}



// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// Loops
// for loop keeps running while the condition remains true

for(let rep = 1; rep <= 10; rep ++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[5]);
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);
