//Q :- Return an array of Ugly numbers from 1 to n; where n is a type of user input value

function maxDivide(number, divisor) {
    while (number % divisor === 0) {
        number /= divisor
    }
    return number;
}

/**
 * Time complexity of maxDivide function
 * 
 * O(log->base divisor(number)). Because this will only divide those numbers which is a multiple of divisor.
 */

function isUgly(number) {
    number = maxDivide(number, 2)
    number = maxDivide(number, 3)
    number = maxDivide(number, 5)

    return number === 1
}

/**   
 * Time complexity of isUgly function 
 * 
 * O(log->base 2(number)). Because this will only check 2,3 or 5 multiples
 * 
 * which is Limited time complexity
 */


function arrayOfUglyNumbers(n) {
    let arr = [];

    for (let i = 1; i < n; i++) {
        if (isUgly(i)) {
            arr.push(i)
        }
    }

    return arr
}

/**  
 * Time complexity of arrayOfUglyNumbers function 
 * for loop, the time complexity would be -> O(log(n))
 * and the time complexity of isUgly is -> O(log->base2(n))
 * 
 * Hence, the time complexity of the function is :: O(n(log->base2(n))), where O(log->base2(n)) is limited or constant time complexity becasue it depends upon "maxDivide" function. So, the time complexity becomes :- O(n)
 */


let endPoint = 100
console.log("Array of ugly numbers from 1 to ", endPoint)
console.log(arrayOfUglyNumbers(endPoint))