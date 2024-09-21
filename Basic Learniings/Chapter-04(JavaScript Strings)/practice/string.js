let username = "Laxman Krishnamurti";
console.log(username.charAt(1)); //output :- a

console.log(username.substring(0, 6)); //output :- Laxman
console.log(username.substring(0)); //output :- Laxman Krishnamurt

//Note :- If we don't pass the final index value(last index) in the substring() function it will return all the character
//values from the specified start position untill the end.

/**
 * String Comparison
 */

var a = "a";
let b = "b";

console.log(a > b); //output :- false
console.log(a < b); //output :- true

//This is because the ASCII value of a is "97" and the ASCII value of b is "98". Both string is compared on the basis
// of ASCII value.

//ASCII :: American standard code for Information Interchange.

let c = "hello";
let d = "by";

console.log(c > d); //output :- b < h

// Here is a satement about comparing two different-different length of a string -> If we are comparing two strings of
//  different lengths, it starts comparing from the start of the string untill the length of the smaller string.

//let's check it

let e = "bsdf";
let f = "azy";
console.log(e > f); //output : true

//let's put the same character on the 0th index of the string

let g = "asdf";
let h = "abcd";
console.log(g > h); //output : true (becasue ASCII of of "s" is grater than the ASCII value of "b" because both string starts from)
// from the same letters so javascript goes one step further to compare both string.

let i = "asdf";
let j = "asdg";
console.log(i > j); //output : false
console.log(i < j); //output : true

/**
 * String Search
 */

let str =
  "Most popular statement in Backend development is : Never trust user data sdfgdfdfg";

console.log("57 ::", str.indexOf("Backend")); //output : 26

//Make a function which would tell that whether a substring is present in a string or not?

function isPresent(str, para) {
  return str.indexOf(para) !== -1;
}

console.log("66 ::", isPresent(str, "popu")); //output : true
console.log("67 ::", isPresent(str, "popular")); //output : true
console.log("68 ::", isPresent(str, "Laxman")); //output : false

//Make a function which count the occurance of a particular letter in a string

function checkOccurance(str, para) {
  let count = 0;

  let char = str.indexOf(para);
  while (char !== -1) {
    count += 1;
    char = str.indexOf(para, (char += 1));
  }

  return count;
}

console.log("82 :: Occurance of the str 'a' is :: ", checkOccurance(str, "a")); //output : 5
console.log("82 :: Occurance of the str 'b' is :: ", checkOccurance(str, "b")); //output : 0
console.log("82 :: Occurance of the str 'B' is :: ", checkOccurance(str, "B")); //output : 1
console.log("82 :: Occurance of the str 'Z' is :: ", checkOccurance(str, "Z")); //output : 0

console.log("89 :: ", str.startsWith("Laxman")); //output : false

console.log("90 :: ", str.startsWith("In")); //output : fasle
console.log("90 :: ", str.startsWith("Most")); //output : true
console.log("91 :: ", str.endsWith("sdf")); //output : false
console.log("92 :: ", str.endsWith("fds")); //output : false

/**
 * String Decomposition
 */

let userInfo = "Laxman";
console.log("101 :: ", userInfo.split("")); //output : 101 ::  [ 'L', 'a', 'x', 'm', 'a', 'n' ]

let user = "Laxman Krishnamurt";
console.log("102 :: ", user.split("a")); //output : 102 ::  [ 'L', 'xm', 'n Krishn', 'murt' ]

//Here, "a" or "" is called delimiter because based on this the string is going to split.

let charSet = "https://github.com/laxmankrishnamurti";
charSet.replace("github", "google");
console.log("charSet :: ", charSet);

//output :- charSet :: https://github.com/laxmankrishnamurti

charSet = charSet.replace("github", "google");
console.log("charSet :: ", charSet);

//output :- charSet :: https://google.com/laxmankrishnamurti
