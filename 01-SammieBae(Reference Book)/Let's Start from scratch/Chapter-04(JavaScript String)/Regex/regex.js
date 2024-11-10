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

// will match "a" and more preceding token
var regex2 = /a+/g;
let str2 = "There is a south movie called Aaaaaa2.. are";
console.log(str2.match(regex2)); // [ 'a', 'a', 'aaaaa' ]

// will match "ar" but 'r' is a optional token
var regex3 = /ar?/g;
console.log(str2.match(regex3)); // ['a', 'a',  'a','a', 'a',  'a','a', 'ar']

// will match "ar" as an optional(here r is optional) and with preceding tokens
var regex4 = /ar*/g;
var str3 = "This is a cat arara rararar rrrr rr";
console.log(str3.match(regex4)); // ['a',  'a',  'ar','ar', 'a',  'ar', 'ar', 'ar']

// will match the string that ends with "at"
var regex5 = /.at/g;
var str4 = "Atomic habit";
console.log(str4.match(regex5)); // null

var str5 = "tibah cimoat";
console.log(str5.match(regex5)); // [ 'oat' ]

// will match the "." character
var regex6 = /\./g;
var str6 = "This is a library and there are more than 1 millions books";
console.log(str6.match(regex6)); // null

var sta6Dash =
  "This. is. a. library. and. there. are. more. than. 1. millions. of. books.";
console.log(sta6Dash.match(regex6)); // ['.', '.', '.', '.','.', '.', '.', '.','.', '.', '.', '.','.']

/**
 * Note :- The "backslash(\)" allows us to cancel out anything that comes after.
 */

// will match any character that comes before "a"
var regex7 = /.\a/g;
var str7 = "This is. a. book";
console.log(str7.match(regex7)); // [ ' a' ] => a single space comes before the character a

// will match any word character
var regex8 = /\w/g;
var str8 = "Unit";
console.log(str8.match(regex8)); //[ 'U', 'n', 'i', 't' ]

// will match any whitespace
var regex9 = /\s/g;
var str9 = "Central processing unit is the brain of any computer";
console.log(str9.match(regex9).length); // 8 (means there are total 8 spaces in the string)

// will match all except white characters
var regex10 = /\S/g;
var str10 = "This is s book";
console.log(str10.match(regex10)); //['T', 'h', 'i', 's', 'i', 's', 's', 'b', 'o', 'o', 'k']

// will match all except characters
var regex11 = /\W/g;
var str11 = "My gmail id is laxmankrishnamurti@gmail.com";
console.log(str11.match(regex11)); // [ ' ', ' ', ' ', ' ', '@', '.' ]

// will match word which length is 4 (will extract those 4 words which length is 4 or greater than 4)
var regex12 = /\w{4}/g;
var str12 =
  "Because of global warming earth's climate is changin at a rapid speed";
console.log(str12.match(regex12)); // ['Beca', 'glob','warm', 'eart','clim', 'chan','rapi', 'spee']

// will match word which length is 4 or more (this will not extract the 4 words from a string but it will directly return the whole word which length is either 4 or greater than 4)
var regex13 = /\w{4,}/g;
var str13 = "This is an elephant";
console.log(str13.match(regex13)); // [ 'This', 'elephant' ]

// will match the string which length is between 4 to 6
var regex14 = /\w{4,6}/g;
var str14 = "This should be done.";
console.log(str14.match(regex14)); // [ 'This', 'should', 'done' ]

/**
 * Character Grouping
 */

// will match "a" character
var regex15 = /a/g;
var str15 = "Let's start with character grouping";
console.log(str15.match(regex15));

// will match any character between the bracket and compose it with the further charcter and make a whole word to search
var regex16 = /[a-d]z/g;
var str16 = "This is an adzzzzzzzzzz";
console.log(str16.match(regex16)); // [ 'dz' ]

// will match any character between the bracket
var regex17 = /[a-z]/g;
var str17 = "This Is An Elephant";
console.log(str17.match(regex17)); // ['h', 'i', 's', 's','n', 'l', 'e', 'p','h', 'a', 'n', 't']

// will match either "a" or "b" and that ends wih s
var regex18 = /(a|b)s/g;
var str18 = "Do you have six pack abs? as you have described.";
console.log(str18.match(regex18)); // [ 'bs', 'as' ]

// period + group + length (will check any word that ends with "." and have any one character either a,b or s.)
var regex19 = /(a|b|s)\./g;
var str19 = "Is this your abs? or this is your abs?";
console.log(str19.match(regex19)); // null

// will match any numeric character
var regex20 = /\d+/g;
var str20 = "ad41a52s4df5";
console.log(str20.match(regex20)); // [ '41', '52', '4', '5' ]
console.log(regex20.test(str20)); // true

// will match only numeric character
var regex21 = /^\d+/g;
var str21 = "lakj3kl4j3kjhk3j4weoeiu24";
console.log(str21.match(regex21)); // null
console.log(regex21.test(str21)); // false

var str21Dash = "289029024849";
console.log(str21Dash.match(regex21)); // [ '289029024849' ]
console.log(regex21.test(str21Dash)); // true

// will match floating point character
var regex22 = /^[0-9]*\.[0-9]*[1-9]+$/g;
var str22 = "0932834";
console.log(str22.match(regex22)); // null
console.log(regex22.test(str22)); // false

var str22Dash = "9384.23874";
console.log(str22Dash.match(regex22)); // [ '9384.23874' ]
console.log(regex22.test(str22Dash)); // true

// will match only alphanumeric (alphabet letter either lower or upper case  + decimal numbers) characters
var regex23 = /[a-zA-Z0-9]/g;
var str23 = "laksdfj230948";
console.log(str23.match(regex23)); //['l', 'a', 'k', 's','d', 'f', 'j', '2','3', '0', '9', '4','8']
console.log(regex23.test(str23)); // true
