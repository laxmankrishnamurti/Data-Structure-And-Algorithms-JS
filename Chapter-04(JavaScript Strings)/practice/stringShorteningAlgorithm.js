var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

function encodeId(num) {
    let base = DICTIONARY.length;
    let encoded = '';

    if (num === 0) {
        return DICTIONARY[0]
    }

    while (num > 0) {
        let randomPosition = (num % base)
        encoded += DICTIONARY[randomPosition]
        num = Math.floor(num / base)
    }

    return encoded;
}

function reverseWord(str) {
    let reverse = '';
    for (let i = (str.length - 1); i >= 0; i--) {
        reverse += str.charAt(i)
    }
    return reverse
}

function decodeId(id) {
    let base = DICTIONARY.length;
    let decode = 0;

    for (let index = 0; index < id.split('').length; index++) {
        //Most important line of the algorithm
        decode = ((decode * base) + DICTIONARY.indexOf(id.charAt(index)))
    }

    return decode
}

let id = 11231230;
let encodedResult = encodeId(id)
console.log("encodedResult :: ", encodedResult)
let getReverse = reverseWord(encodedResult)
console.log("getReverse :: ", getReverse)
let decodedResult = decodeId(getReverse)
console.log("decodedResult :: ", decodedResult)