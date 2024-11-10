/**
 * Counting or Special Characters
 */

var regex1 = /a/g;
let str1 = "Bharat is a great country";

// if match, will return the boolean value
console.log("regex1", regex1.test(str1)); // regex1 true

// if match, will return the index value of the first match
console.log("regex1 index", str1.search(regex1)); // regex1 index 2

// if match, will return all matches
console.log("regex1 index all", str1.match(regex1)); // regex1 index all [ 'a', 'a', 'a', 'a' ]
