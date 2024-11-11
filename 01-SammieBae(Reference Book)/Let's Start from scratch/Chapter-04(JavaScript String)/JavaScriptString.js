const name = new String("Laxman");
console.log("name is", name);

const name1 = String("Laxman");
console.log("name is", name1);

const name2 = "Laxmna";
console.log("name is", name2);

/**
 * String access
 */

// In every programming language indexing starts from 0

// Single character

let email = "laxmankrishnamurti@gmail.com";
const index = 2;
console.log(`Character at ${index} index in ${email} is`, email.charAt(index));

// Output -> Character at 2 index in laxmankrishnamurti@gmail.com is x

// Get a sub-string or a group of character

const start = 3;
const end = 10; // (excluded)
console.log(
  `Sub-String from ${start} to ${end} in ${email} is`,
  email.substring(start, end)
);

// Output -> Sub-String from 3 to 10 in laxmankrishnamurti@gmail.com is mankris

// We we do not pass the end index value it will return the whole string from the starting index which we have passes to end.

/**
 * String Comparison
 */

// Let's find ASCII value of some alphabetic characters
console.log("a".charCodeAt(0)); // 97
console.log("A".charCodeAt(0)); // 65
console.log("Z".charCodeAt(0)); // 90
console.log("z".charCodeAt(0)); // 122

console.log("a" > "b"); // false
console.log("b" > "a"); // true
console.log("abc" > "abd"); // false
console.log("dca" > "z"); // false
console.log("z" > "aldjmnklasji"); // true

/**
 * String Search
 */

const str = "laxman";
console.log(`${str} exist in the ${email}`, email.indexOf(str));

// laxman exist in the laxmankrishnamurti@gmail.com 0

let str1 = "krishz";
console.log(`${str1} exist in the ${email}`, email.indexOf(str1));

// krishz exist in the laxmankrishnamurti@gmail.com -1

console.log(`${str1} exist in the ${email}`, email.indexOf(str1, 8));

// krishz exist in the laxmankrishnamurti@gmail.com -1 => Because we have forced to find the string from 8th index which exactly dosen't exist. It is there, but before 8th index.

// check the occureance of a search string

function isExist(string, word) {
  return string.indexOf(word) !== -1;
}

console.log("isExist ->", isExist("You are an engineer", "a")); // isExist -> true

// find occurance of a character within a string

const longStr = "Climate change is the biggest problem for the humankind";
let count = 0;
let position = longStr.indexOf("a");

while (position !== -1) {
  count++;
  position = longStr.indexOf("a", position + 1);
}

console.log(`Occurance of 'a' in '${longStr}' is`, count);

// Occurance of 'a' in 'Climate change is the biggest problem for the humanking' is 3

// startsWith and endsWith

console.log(longStr.startsWith("Climate")); // true
console.log(longStr.endsWith("world")); // false

/**
 * String Decomposition
 */

const newStrArray = longStr.split(" ");
console.log("newStrArray", newStrArray);

// newStrArray ['Climate','change','is','the','biggest','problem','for','the','humankind']

const newEmailArray = email.split("");
console.log("newEmailArray", newEmailArray);

// newEmailArray ['l','a','x','m','a','n','k','r','i','s','h','n','a','m','u','r','t','i','@','g','m','a', 'i','l','.','c','o','m']

/**
 * String Replace
 */

email = email.replace("@", "AT");
console.log("newEmail", email);

// newEmail laxmankrishnamurtiATgmail.com

/**
 * Regular Expressions
 */

console.log("REGULAR EXPRESSIONS");

const regStr = "Climate change can change the human history forever";
console.log("Result with search method", regStr.search(/can/));

// Result with search method 15

console.log("Result with match method", regStr.match(/can/));

/* 
Result with match method [
  'can',
  index: 15,
  input: 'Climate change can change the human history forever',
  groups: undefined
]
*/

console.log("Result with match method", regStr.match(/a/g));

// Result with match method [ 'a', 'a', 'a', 'a', 'a' ]

console.log("Result with match method", regStr.match(/an/g));

// Result with match method [ 'an', 'an', 'an', 'an' ]

console.log("Result with match method", regStr.match(/AN/g));
// Result with match method null

console.log("Result with match method", regStr.match(/AN/i));

/*
Result with match method [
    'an',
    index: 10,
    input: 'Climate change can change the human history forever',
    groups: undefined
]
*/

console.log("Result with match method", regStr.match(/AN/g));
// Result with match method null

/**
 * QUERY STRING
 */

console.log("QUERY STRING");

var uri = "category=4&product_id=23948&query=lcd+tv";
var queryString = {};

const matches = uri.matchAll(/([^?=&]+)(=([^&]*))/g);
console.log("Matches", matches);
const matchesArray = [...matches];
console.log("matchesArray", matchesArray);

uri.replace(new RegExp("([^?=&]+)(=([^&]*))", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});

console.log("queryString", queryString); // queryString { category: '4', product_id: '23948', query: 'lcd+tv' }

var URL = "https://google.com";
URL = URL.replace("googlex", () => {
  console.log("google is present in the string");
});
