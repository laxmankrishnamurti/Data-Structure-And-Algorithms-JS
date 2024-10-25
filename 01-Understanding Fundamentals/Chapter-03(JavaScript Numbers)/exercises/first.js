//Q :- Given three numbers x, y and p, compute (x^y) % p. (Modular exponentiation)

console.log(2 ** 6 % 3)     //Modular exponentiation    (Structure :: (x ** y) % p)
//where 2 -> Base, 6 -> is Exponent, 3 -> is modulus

/**
 * Key-points :- Modular exponentiation is a type of exponentiation performed over a modulus(Here p = 3), which is useful in computer science and used in the field of public-key encryption algorightms.
 * 
 * let's make a function for it.
 */

function modularExponentiation(base, exponent, modulus) {
    return (Math.pow(base, exponent) % modulus)
}

const remainder = modularExponentiation(31254, 32564, 1254)
console.log("remainder is :: ", remainder)

//Note :: This does exactly what the question ask. However, it cannot handle large exponents. On Larger number it will give either "NaN" or "Infinity".

console.log("line-21 : ", (15 * 5) % 3)
console.log([(4 % 3) * (5 % 3)] % 3)
console.log(((4 * 5) % 3) === ([(4 % 3) * (5 % 3)] % 3))    //Output :- true 

console.log("line-25 : ", 75 % 3)

/**
 * Mathematical Property
 * 
 * c % m = (a * b) % m  ; 
 * c % m = [(a % m) * (b % m)] % m
 */

function handleModularExponentiation(base, exponent, modulus) {
    if (Number(modulus) === 1) return 0;

    let value = 1;

    for (let i = 0; i < exponent; i++) {
        value = (value * base) % modulus;
    }

    return value;
}

console.log("By handleModularExponentiation :: ", handleModularExponentiation(31254, 32564, 1254))

console.log(2 % 3)