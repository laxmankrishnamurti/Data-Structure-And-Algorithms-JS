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
