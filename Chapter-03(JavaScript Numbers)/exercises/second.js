function primeNumbersLessThanN(n) {
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

function isPrime(input) {
    if (input <= 1) return false;
    if (input <= 3) return true;

    if (input % 2 == 0 || input % 3 === 0) {
        return false
    }

    for (let i = 5; i * i <= input; i += 6) {
        if (input % i == 0 || input % (i + 2) == 0) {
            return false;
        }
    }

    if (input > 3) return true

}

primeNumbersLessThanN(100)

//Time complexity -> O(nsqrt(n))