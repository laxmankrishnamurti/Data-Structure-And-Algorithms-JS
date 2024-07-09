let username = "Laxman Krishnamurti"
console.log(username.charAt(1))     //output :- a

console.log(username.substring(0,6))    //output :- Laxman
console.log(username.substring(0))      //output :- Laxman Krishnamurt

//Note :- If we don't pass the final index value(last index) in the substring() function it will return all the character 
//values from the specified start position untill the end.

/**
 * String Comparison
 */

var a = 'a';
let b = 'b';

console.log(a > b)  //output :- false
console.log(a < b)  //output :- true

//This is because the ASCII value of a is "97" and the ASCII value of b is "98". Both string is compared on the basis
// of ASCII value.

//ASCII :: American standard code for Information Interchange.

let c = "hello"
let d = "by"

console.log(c > d)  //output :- b < h

// Here is a satement about comparing two different-different length of a string -> If we are comparing two strings of
//  different lengths, it starts comparing from the start of the string untill the length of the smaller string.

//let's check it

let e = "bsdf"
let f = "azy"
console.log(e > f)  //output : true

//let's put the same character on the 0th index of the string

let g = "asdf"
let h = "abcd"
console.log(g > h)  //output : true (becasue ASCII of of "s" is grater than the ASCII value of "b" because both string starts from)
// from the same letters so javascript goes one step further to compare both string.

let i = "asdf"
let j = "asdg"
console.log(i > j)  //output : false
console.log(i < j)  //output : true