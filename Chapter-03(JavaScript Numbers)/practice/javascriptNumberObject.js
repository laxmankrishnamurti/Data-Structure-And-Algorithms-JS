//Integer Rounding

// console.log(5 / 4);

//Output :- 1.25 (because javascript uses floating point to represents all number)

//Note :- But in other programming languages like java, c++....etc gives "1" of the expression. Because they are statically typed language but javascript is a dynamically types language and uses floating point number system.

// console.log(Math.floor(0.9))    //0
// console.log(Math.floor(1.1))    //1

// console.log(Math.round(0.49))   //0
// console.log(Math.round(0.5))    //1

// console.log(Math.round(2.5))    //3
// console.log(Math.ceil(1.5))     //2

/******************************  Number.EPSILON  ********************************** */

// console.log(Number.EPSILON)

function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON
}

// console.log(numberEquals(-2.4, 2.5))

/******************************************* Maximum ***********************************/

console.log(Number.MAX_SAFE_INTEGER)    //9007199254740991
console.log(Number.MIN_SAFE_INTEGER)    //-9007199254740991

console.log(Number.MAX_SAFE_INTEGER + 1)    //900719925474099
console.log(Number.MAX_SAFE_INTEGER + 2)    //900719925474099
console.log(Number.MAX_SAFE_INTEGER + 20)   //900719925474099
console.log((Number.MAX_SAFE_INTEGER + 1) === (Number.MAX_SAFE_INTEGER + 2))    //true

//Note :- This will true because it cannot go any higher. However, it does not work for floating-point decimals. And same goes with smallest integer.

/********************************************** Minimum *****************************/

console.log((Number.MAX_SAFE_INTEGER + 1.0) === (Number.MAX_SAFE_INTEGER + 2.1))    //false

//Return the larget floating point number 
console.log(Number.MAX_VALUE)   //1.7976931348623157e+308
console.log(Number.MIN_VALUE)   //5e-324    {Note :: This is not a negative number but actually this is biggest thatn "Number.MIN_-SAGE_INTEGER"}

console.log((Number.MAX_VALUE + 1.235) === (Number.MAX_VALUE + 2.3256)) //true 

//Note :- Number.MIN_VALUE isi also the closest floating point to zero so that's why we can see that kind of result :-
console.log((Number.MIN_VALUE - 1) === (-1))    //true

// Because this is similar to writing like this  :: (0 - 1) = -1