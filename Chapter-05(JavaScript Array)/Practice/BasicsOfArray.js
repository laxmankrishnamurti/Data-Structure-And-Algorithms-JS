const array1 = [1, 2, 3, 4];

//Insertion :- Adding an element into the array

array1.push(5); // Adds in element to the last position
console.log("array1 :: ", array1);
//Output : array1 :: [1,2,3,4,5]

array1.unshift(0); // Adds in element on the first position
console.log("array1 :: ", array1);
//Output : array1 :: [0,1,2,3,4,5]

//Deletion

const lastPopedValue = array1.pop();
console.log("LastPopedValue :: ", lastPopedValue);
//Output  : LastPoppedValue :: 5

const firstPoppedValue = array1.shift();
console.log("firstPoppedValue :: ", firstPoppedValue);
//Output : firstPoppedValue :: 0

//Access

console.log("first index value :: ", array1[0]); //Output: first index value : 1

//Search (With the help of loop)

//Loop : Loops are a way to access every single array's element which time complexity is O(n). Becasue it goes to the last element.

for (let i = 0; i < array1.length; i++) {
  console.log(`index : ${i} value : ${array1[i]}`);
}

/*
index : 0 value : 1
index : 1 value : 2
index : 2 value : 3
index : 3 value : 4
*/

/**
 * For in loop
 */

let countries = ["India", "Pakistan", "Bangladesh", "Shrilanka", "Nepal"];
for (let index in countries) {
  console.log(`index : ${index} vlaue : ${countries[index]}`);
}

/*
index : 0 vlaue : India
index : 1 vlaue : Pakistan
index : 2 vlaue : Bangladesh
index : 3 vlaue : Shrilanka
index : 4 vlaue : Nepal
*/

/**
 * For of loop
 */

for (let element of countries) {
  console.log(`Element : ${element}`);
}

/*
Element : India
Element : Pakistan
Element : Bangladesh
Element : Shrilanka
Element : Nepal
*/

/**
 * forEach loop :- The big difference between forEach and other methods of iteration is that forEach cannot break out of the iteraton or skip certain elements in the array. forEach is more expensive and explicit by going through each element.
 */

countries.forEach((country, index) => {
  console.log(`index : ${index} vlaue : ${country}`);
});

/*
index : 0 vlaue : India
index : 1 vlaue : Pakistan
index : 2 vlaue : Bangladesh
index : 3 vlaue : Shrilanka
index : 4 vlaue : Nepal
*/
