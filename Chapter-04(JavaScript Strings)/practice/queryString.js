var uri = 'http://laxmankrishnamurti.com/product_aspx?category=4&product_id=2140&query=lcd+tv';

var queryString = {};
uri.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function ($0, $1, $2, $3) {
        queryString[$1] = $3
    }
);

// console.log("queryString :: ", queryString)
/*
 queryString ::  {
    'http://laxmankrishnamurti.com/product_aspx': undefined,
    category: '4',
    product_id: '2140',
    query: 'lcd+tv'
  }
*/
// console.log("now uri is :: ", uri)

//now uri is ::  http://laxmankrishnamurti.com/product_aspx?category=4&product_id=2140&query=lcd+tv 

function exponentEvaluation(exponent) {
    let base = 2;
    while (exponent !== 1) {
        base *= 2
        exponent--;
    }

    return base;
}

let exponent = 64
let result = exponentEvaluation(exponent)
// console.log(`exponent is ${exponent}, base 2 :: value is ${result}`)


//Base64 Encoding

let str = 'Internet makes easy to get information within a second'
let encodedStr = btoa(str)
console.log("encodedStr :: ", encodedStr)

let decodedStr = atob(encodedStr)
console.log("decodedStr | Original String :: ", decodedStr)

const userData = {
    name: "Laxman",
    age: 21,
    subject: "computer science",
    purpose: "Demolish all that is false"
}

// const encodedObj = atob(userData)
// console.log("encoded object :: ", encodedObj)
/*
DOMException [InvalidCharacterError]: Invalid character. It is only applicable on string.
*/

/**
 * Let's try it on a number
 */

let uniqueId = 11231230
let encodedUniquId = btoa(uniqueId)
console.log("encodedValue of the uniquId is :: ", encodedUniquId)

let getUniqueId = atob(encodedUniquId)
console.log("Id of the url in the database is :: ", getUniqueId)

/**
 * Write a program that reverse a string
 */

let strValue = 'laxman'

function getReverseString(str) {
    let reverse = '';
    for (let i = (str.length - 1); i >= 0; i--) {
        reverse += str.charAt(i)
    }
    return reverse;
}

console.log(`Reverse string of ${strValue} is ${getReverseString(strValue)}`)