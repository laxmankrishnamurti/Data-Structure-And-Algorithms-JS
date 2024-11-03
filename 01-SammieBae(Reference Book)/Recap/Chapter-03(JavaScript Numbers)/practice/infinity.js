//The only thing greater than (Number.MAX_VALUE -> gratest floating point number) is Infinity, and the only thing smaller than (Number.MAX_SAFE_INTEGER) is -Infinity

console.log(Infinity > (Number.MAX_VALUE))          //Output :: true
console.log(Infinity > (Number.MAX_SAFE_INTEGER))   //Output :: true

console.log(-Infinity < (Number.MAX_SAFE_INTEGER))  //Output :: true
console.log((-Infinity - 3847) === (-Infinity - 3993))  //Output :: true

console.log((-Infinity - 83) === (-Infinity - 9838))    //Output :: true

// This evaluates to true because nothing can go smaller than -Infinity


//Size Summary

/**
 * -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
 */