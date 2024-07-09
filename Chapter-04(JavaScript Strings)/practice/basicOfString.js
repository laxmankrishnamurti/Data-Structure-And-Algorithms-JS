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

let c = "hello"
let d = "by"

console.log(c > d)  //output :- b < h