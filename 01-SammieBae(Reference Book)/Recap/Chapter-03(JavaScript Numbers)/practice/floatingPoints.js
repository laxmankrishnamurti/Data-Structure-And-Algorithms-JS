//Before going into it's detail, let's analize the result of the code 

function isEqual(x, y) {
    return (x === y)
}

// console.log(isEqual((0.1 + 0.2), 0.3))  //Output :- false
// console.log(isEqual(0.3, 0.3))          //Output :- true

//You might be woundering that with the same arguments how does it possible to get two different answers? Let's understand it..........

/**
 * Actually it starts from how computer processor understand floating-point numbers. Because storing an integer value into it's memory is going to be easy as respect to storing a floating-point numbers. Why? -----------> let's understand this
 *
 * Integer to Binary :- Storing an integer value into computer's memory is easy because each bit of integer has a significant value means it can be only 0 or 1 with a fixed value. But it not goes same as floating-point numbers. Because we already know that a floating-point number may have infinite numbers so it needs to be rounded so that computer can store the floating number.
 *
 * Because, computer has limited numbers of bits into it's memory such as either it can be 32-bit or 64-bit. Hence,
 *              Computer can only store the value that has limited fixed numbers and that can easily converted into binary format. And one of the biggest challenge with the floating-point number is, it is difficult to convert a floating-point number into binary format. It takes to much steps or process to convert a floating-point number into binary format. So, it becomes more complicated for computer processor to sotre a floating-point numbers. And because of this reason it is harder to compare floating-point number and do some methematical computation, because it can produce tiny errors.
 *
 * Hence,
 *        Keeping all these problems in the mind computer scientist creates a standard way to handle floating-points number in computing which is known as "IEEE-754"
 */

//First of all let's learn how to convert a floating-point into binary format. For example let's convert 120.254 into binary format. 

//Step-00 :: Let's brakdown the number into "Integer" and "Fraction format". Here 120 is the Interger value and the 0.254 is the Fraction value.

//Step-01 :: First of all convert the integer value into binary format and then convert the Fraction value into binary format. 
/**
 * (120)base 2 = (111000)
 * (0.254)base 2 = (01000001....)   Approx. value 
 */

//Step-03 :: Combine both binary representation, which looks like:- 111000.01000001
//Step-04 :: Starts applying standardization method of IEEE-754
//Step-01 :: Normalize the binary representation in the from :- 
//(1.m * 2^e-127)   For Single-floating precision   (32-bit)
//(1.m * 2^e-1023)  For double-floating precision   (64-bit)
//here, m = Mantissa   : e = Exponent  
//The Normalize value is :- 1.1100001000001 * 2^-5 (because redix point shifted by 5)
//Mantissa value is :- 1100001000001

//Step-02 :: Evaluate all the values 
//Mantissa = 1100001000001
//Exponent :: (e - 127) = -5;    e = -5 + 127;    e = 122
//Convert the exponent into binary representation :: 1111010

//Step-03 :: Put all these values into their own place or in it's format
//IEEE-754 FORMAT 
// (32-bit) Sign-bit(1 bit space)    ::  Exponent(8-bit space)   :: Mantissa(23-bit space)

//The binary form of the number in single floating-precision is :: 
//  SIGN        EXPONENT        MANTISSA    
//   0         11110100     11000010000010000000000
//Final Binary representation looks like this :- 01111010011000010000010000000000

//Step-04 :: To convert this into double floating precision we need to just compair the exponent value with this := e - 1023 = Actual exponent vlaue


//On the line-number-31 we consider the approximate binary value of the decimal/fraction. It could be anuthing as per our need. This binary value can be different when conputer convert this into more precizable format. It means computer is going to take more bits for accurate computation that can be different from our values. 

// As of now we understand that how computer treats a floating-point number. So, let's disscuss about our previous problem and try to understand that why this is happening.

function checkEqual(a, b) {
    return (a === b);
}

console.log(checkEqual(0.3, 0.3))   //Output : true

//Note :- We got "true" because the value is same so it's precision value is also be the same. Because the precision value for the second argument should be the same as first argument because both values are same. 

console.log(checkEqual((0.1 + 0.2), 0.3))   //Output : false

//Note :- We got "false". Let's understand why this is happening.......

//Because, Every floating-point number may have different-different values because of it's precision. For example:- For every time if we put 0.1 as a single argument the processor treates as the same value. But if we want to get 0.1 by adding these two numbers :- 0.05 + 0.05 :: Then it will not going to happen becaue of the Precision of the fraction value. 

//Hence, the value we are trying to achieve which is 0.3 by adding these two numbers such as (0.1 + 0.2) will not be the same becasue 0.1 has different precision value and 0.2 has different precision value.

/**
 * Let's understand in a easy way
 *
 * Understand how the processor will store the number
 * 0.1 = 0.000110010011......
 * 0.2 = 0.001100110011......
 * 0.3 = 0.010011001100......
 *
 * console.log(0.1 + 0.2)          //Output :- 0.30000000000000004
 * sum of 0.1 and 0.2 is :- 0.01001100110011001100111...
 * but the actual value of 0.3 is :- 0.01001100110011001100110011001100
 *
 * which is not same as we got while adding the two argumants. hence, the result will be false.
 */

//You might be woundering that does 0.3 as absolute value and the 0.3 which is sum of two values will never be the same?        -   

//No, it's not like that. To avoid this small correction we have EPSILON_VALUE. Let's have a look :-

console.log(0.1 + 0.2)          //Output :- 0.30000000000000004

function isEqualCheck(a, b) {
    return Math.abs(a - b) < Number.EPSILON
}

console.log(isEqualCheck((0.1 + 0.2), 0.3))     //Output :- true (as we want)

/**
 * What is Number.EPSILON and what it does?
 * 
 * Number.EPSILON returns the smallest interval between two representable numbers. This is useful for the problem with floating-point approximation as we face the problem previously. 
 * 
 * Number.EPSILON is used in floating-point arithmetic to determine whether the difference between two numbers is small enough to be considered negligible.
 */

console.log(0.1 + 0.2)      //Output : 0.30000000000000004
console.log(0.3)            //Output : 0.3

console.log((0.1 + 0.2) - 0.3)  //Output :- 5.551115123125783e-17

let diff = 5.551115123125783e-17
console.log(diff < Number.EPSILON)  //Output :- true

//Note :- It means the difference between sum of 0.1 & 0.2 and 0.3 is smaller than the value of "Number.EPSILON" so that's why it can be negligible. Hence, Both value should be equal.

console.log(Math.abs((0.1 + 0.2) - 0.3))        //Output :- 5.551115123125783e-17
//Note :- Math.abs(arguments) calculate the absolute value.