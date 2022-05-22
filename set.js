// set in javascript

const array1 = [1, 2 , 3, 4];

// creating a set

const myset = new Set(array1);

console.log(myset);

// removing duplicate values from the array

const array2 = [1,1,2,2,3,3];

const  mySet2 = new Set(array2);

console.log(mySet2);

// conerting set to array using spread operator

myArray = [...mySet2];

console.log(myArray);

// set methods

// add

mySet2.add(5);
mySet2.add(6);

console.log(mySet2);

// delete

mySet2.delete(5);
mySet2.delete(6);

console.log(mySet2);

// clear

mySet2.clear();
console.log(mySet2);