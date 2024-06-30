console.log(Number.MAX_SAFE_INTEGER)    //output :- 9007199254740991

if (Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2) {
    console.log("Condition true")
}

//Output :: Condition true, Because it cannot hold mode than 9007199254740991. So, both value would become the MAX_SAFE_INTEGER which is 9007199254740991. But it will not apply the same on floating point numbers while adding.

if ((Number.MAX_SAFE_INTEGER + 1.235) === (Number.MAX_SAFE_INTEGER + 20.2102)) {
    console.log("MAX_SAFE_INTEGER : true on floating point number")
} else {
    console.log("MAX_SAFE_INTEGER : false on floating point number")
}

//output :: MAX_SAFE_INTEGER : false on floating point number



console.log(Number.MAX_VALUE)   //output :: 1.7976931348623157e+308

//Scientific notaion of the number would be :: 1.7976931348623157×10^308

/**
 *  It is a very large number close to the maximum representable value for a double-precision floating-point in programming languages. In decimal form, it would have 308 digits.
 * 
 * This number is used to denote the maximum positive value for a double in IEEE 754 standard.
 */

if ((Number.MAX_VALUE + 3) === (Number.MAX_VALUE + 3098)) {
    console.log("MAX_VALUE is true while adding positive integer")
} else {
    console.log("MAX_VLAUE is false while adding positive integer")
}

//Output :: MAX_VALUE is true while adding positive interger

if ((Number.MAX_VALUE + 1.023510) === (Number.MAX_VALUE + 20.210)) {
    console.log("MAX_VALUE is true while adding floating point number")
} else {
    console.log("MAX_VALUE is false while adding floating point number")
}

//Output :: MAX_VLAUE is true while adding floating point number

/**
 * Here, this uses double-precision floating-point representation so that's why both result will become "true"
 */