var str = "JavaScript DataStructures";
var n = str.search(/Data/);
console.log("n is :: ", n);

//output : 11

/**
 * Commonly Used Regexes
 */

//Anu Numeric Characters

var reg = /\d+/;
console.log(reg.test("laxman"));
//output : false
console.log(reg.test("LAXMANSDLJKF3"));
//output : true
console.log(reg.test("34lkasjdflkj38789"));
//output : true
console.log(reg.test("aasldkASDF48aksjdfjl!@#$"));
//output : true
console.log(reg.test("lask@!#$djf93478246@#$"));
//output : true

//Only Numeric Characters

var reg = /^\d+$/;

console.log("Only Numeric Characters");
console.log(reg.test("laxman"));
//output : false
console.log(reg.test("LAXMANSDLJKF3"));
//output : false
console.log(reg.test("34lkasjdflkj38789"));
//output : false
console.log(reg.test("aasldkASDF48aksjdfjl!@#$"));
//output : false
console.log(reg.test("lask@!#$djf93478246@#$"));
//output : false
console.log(reg.test("950898110165465"));
//output : true

//Floating Numeric Characters

var reg = /^[0-9]*\.[0-9]*[1-9]+$/;

console.log("Floating Numeric Characters");
console.log(reg.test("15"));
//output : false
console.log(reg.test("15.21502121"));
//output : true
console.log(reg.test("0.15"));
//output : true
console.log(reg.test("5."));
//output : false

/**
 * Explanation of the corrected regex:

^[0-9]*: Matches any number of digits at the start.
\.: Matches a literal dot.
[0-9]*: Matches any number of digits after the dot.
[1-9]+: Ensures there is at least one non-zero digit after the decimal point to signify a fractional part.

 */

//Only Alphanumeric Characters

var reg = /[a-zA-Z0-9]/;

console.log("Only Alphanumeric Characters");
console.log(reg.test("somethingeELSE"));
//output : true
console.log(reg.test("hello"));
//output : true
console.log(reg.test("112alsdjkf"));
//output : true
console.log(reg.test("112"));
//output : true
console.log(reg.test("^"));
//output : false

/**
 * Let's try to test other methods
 */

const username = "Laxman krishnamurti";
console.log("Index of K in username", username.search(/K/));
//outptu : Index of K in username : -1 (It means this character is not present in the string )
console.log("Index of K in username", username.search(/k/));
//output : Index of k in username : 7

/**
 * Any Numeric Character
 */

var reg = /\d+/;
// console.log(
//   "search with reg with numeric character :: ",
//   reg.search("laxman1")
// );

//output : TypeError: reg.search is not a function
//we cannot use the search method with a regular expression. It is used on a string. Let's try to reverse it.

console.log("search on string with regexes", username.search(reg)); //output : -1

let password = "laxman@123";
console.log("search on a string with regexes", password.search(reg));
//output : search on a string with regexes : 7  (return the index value of first numeric character)

console.log("search on a string with regexes", password.match(reg)); // will return all matches
//search on a string with regexes [ '123', index: 7, input: 'laxman@123', groups: undefined ]

let changedPassword = "12laxman34kumar56";
console.log("search on a string with regexes", changedPassword.match(reg)); // will return all matches
//search on a string with regexes [ '12', index: 7, input: '12laxman34kumar56', groups: undefined ]

console.log("exec() on a string", reg.exec("laxman"));
//output : exec() on a string null
console.log("exec() on a string", reg.exec("laxman123kumar567"));
// exec() on a string [ '123', index: 6, input: 'laxman123kumar567', groups: undefined ]

/**
 * SUMMARY
 *
 * search() & match()   -> Regexes methods only applicable on a string with regexes as an argument
 * exec() & test()      -> Only applicable on regexes with string as an argument
 */
