console.log(Number.MIN_SAFE_INTEGER)    //output :: -9007199254740991

if ((Number.MIN_SAFE_INTEGER - 1) === (Number.MIN_SAFE_INTEGER - 2)) {
    console.log("MIN_SAFE_INTEGER is true while subtracting positive integer")
} else {
    console.log("MIN_SAGE_INTEGER is false while subtracting positive integer")
}

// -9007199254740991 - 1 = -9007199254740992
// -9007199254740991 - 2 = -

//But it will same as MAX_SAFE_INTEGER, because it will not work same with floating point numbers

if ((Number.MIN_SAFE_INTEGER - 1.1111) === (Number.MIN_SAFE_INTEGER - 2.0222)) {
    console.log("MIN_SAFE_INTEGER is true while subtracting floating integer")
} else {
    console.log("MIN_SAFE_INTEGER is false while subtracting floating integer")
}

//output :: MIN_SAFE_INTEGER is false while subtracting floating integer


//Getting MIN_VALUE which is floating point number

console.log(Number.MIN_VALUE)   //Outpu :: 5e-324

//Scientific notation :- 5 * 10^-324
//Decimal Form: A very small number with 323 zeros after the decimal point, followed by a 5.
//Number.MIN_VALUE is also the closest floating point to Zero.

console.log((Number.MIN_VALUE - 1) === -1)  //Output :: true 

//closest to the Zero; 0 - 1 = -1 === -1 (true)

//Note :- MIN_VALUE is grater than MIN_SAFE_INTEGER