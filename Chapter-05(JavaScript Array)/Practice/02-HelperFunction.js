//slice method :: slice(starting index, ending index)

const array1 = [1, 2, 3, 4, 5, 6];
const getChunk1 = array1.slice(1, 3);
console.log(getChunk1); //Output : [2,3]

const getChunk2 = array1.slice(2);
console.log(getChunk2); //Output : [3,4,5,6]

const getChunk3 = array1.slice();
console.log(getChunk3); //Output : [1, 2, 3, 4, 5, 6]

//Note : If only begining index is passed, the ending index will be assumed to be the maximum index. And if nothing is passed, this function simply returns a copy of the array.

console.log(array1 === getChunk3); //Output : false

//Note : Although the element is same of both array but the memory address of both variables are different. Becasue the array is a reference type variable.

//Note : If we assign an array into different variable and try to change it's value it will effect the original one. Becuase both have same reference means both have same memory addresses.

const marks1 = [89, 96, 91, 89, 85, 75];
const marks2 = marks1;

console.log(marks1);
console.log(marks2);

/*
[89, 96, 91, 89, 85, 75]
[(89, 96, 91, 89, 85, 75)];
*/

marks2[0] = 91;
console.log(marks1);
console.log(marks2);

/*
[91, 96, 91, 89, 85, 75]
[(91, 96, 91, 89, 85, 75)]
*/

//To create a new array from the existing one we use .from() method

const marks3 = Array.from(marks1);
console.log(marks3);

//Output : [91, 96, 91, 89, 85, 75];

marks3[0] = 10;
console.log(marks3);

//Output : [10, 96, 91, 89, 85, 75];

console.log(marks1);
//Output : [91, 96, 91, 89, 85, 75];

/**
 * splice method :: splice(begining index, how many element needs to be deleted, what is going to be added at the begining index which is specified in the first parameter.)
 *
 * splice returns the deleted value
 */

console.log("Splice method");

const array2 = [1, 2, 3, 4, 5];
const del1 = array2.splice(2, 2);
console.log(del1); // Output : [3,4]
console.log(array2); //Output : [1,2,5]

const del2 = array2.splice(1, 0, [3, 5, 3, 2, 6, 7]);
console.log(del2); //Output : []
console.log(array2);
//Output : [ 1, [ 3, 5, 3, 2, 6, 7 ], 2, 5 ]

/**
 * concat method :: .concat(parameter) :- This adds new element to the array at the end of the array and returns the array.
 */

console.log("concat method");

const array3 = [0, 1, 1];
console.log(array3.concat(4, 5, 3, 4)); //Output : [0,1,1,4,5,3,4]

/**
 * length property :: The length property return the length of the array.Changing this property to lower size can delete elements from the array.
 */

console.log("length property");

const array4 = [1, 2, 3, 4, 5];
console.log(array4.length); //Output : 5

array4.length = 2;
console.log(array4); //Output : [1,2]

/**
 * Spread operator :: The spread operator deoted by three periods(...), is used to expand arguments where zero arguments are expected.
 */

console.log("Spread operator");

function getSum(a, b, c, d) {
  console.log(a + b + c + d);
}

getSum(...marks1); //Output : 367

function getMultiplication(...parameters) {
  const product = parameters.reduce((mul, nextArg) => {
    return mul * nextArg;
  }, 1);
  console.log("Product of all arguments are : ", product);
}

getMultiplication(10, 2, 32, 32, 1);
//Output : Product of all arguments are :  20480

//Math.max & Math.min -> Takes unlimited number of parameers

const numbers = [
  2, 3, 4, 2, 342, 34, 32344, 2, 234224557, 6, 5, 55, 677788656, 76, 554,
];

console.log("Maximum number is : ", Math.max(...numbers));
console.log("Minimum number is : ", Math.min(...numbers));

/*
Maximum number is :  677788656
Minimum number is :  2
*/
