//Modular multiplicative inverse  :: Of an integer a modulo m is an integer x such that :
//(a.x) = 1 (mod of m)
//In other words :: ((a.x) % m) = 1

function modInverse(e, phi) {
    var m0 = phi, t, q;
    var x0 = 0, x1 = 1;

    if (phi === 1) {
        return 0;
    }

    while (e > 1) {
        //q is quotient
        q = Math.floor(e / phi);
        t = phi;

        //phi is remainder now, process same as Euclid's algorithms
        phi = e % phi, e = t
        t = x0;

        x0 = x1 - q * x0;
        x1 = t;
    }

    //Make x1 positive
    if (x1 < 0) {
        x1 += m0
    }

    return x1

}

let modInverseValue = modInverse(7, 40)
console.log("modeInverseValue is :: ", modInverseValue)


/**
 * Check modular multiplicative inverse
 * 
 * a = 7, modulo = 40, x = 23
 * (7*23) % 40 = 1 (true)
 */