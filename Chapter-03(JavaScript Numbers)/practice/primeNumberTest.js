function primeNumberTest(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 == 0 || n % 3 == 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false
        }
    }

    return true
}

console.log("From primeNumberTest function :: ", primeNumberTest(2321555))

function checkPrime(n) {

    if (n <= 1) return false;
    if (n <= 3) return true;

    if ((n % 2 === 0) || (n % 3 === 0)) return false

    let sqr = Math.floor(Math.sqrt(n))
    const checkArr = [];

    while (sqr >= 5) {
        if ((sqr % 3 !== 0)) {
            checkArr.push(sqr)
        }
        sqr -= 2;
    }

    for (let i = 0; i < checkArr.length; i++) {
        if ((n % checkArr[i] === 0)) {
            return false;
        }
    }

    return true;
}

console.log("From checkPrime function :: ", checkPrime(2321555))