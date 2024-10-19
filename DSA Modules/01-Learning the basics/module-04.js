function evenlyDivides(N){
    let count = 0; 
    let num = N;
    let digit;
    while(num){
        digit = Math.floor(num % 10);
        num = Math.floor(num / 10);
        if(digit !== 0){
            let isDivisible = N / digit
            if(N % digit === 0){
                count++
            }
        }
    }
    return count;
}
// let digits = evenlyDivides(2446)
// console.log(digits)

function reverseInteger(x){
    let isNegative = false;
    if(x < 0){
        isNegative = true;
        x = x - (x * 2)
    }

    let digit;
    let reverse = 0;
    let num = x;
    while(num){
        digit = Math.floor(num % 10);
        num = Math.floor(num / 10);
        reverse = (reverse * 10) + digit;
    }
    if(isNegative){
        return `-${reverse}`
    }
    return reverse;
}
// console.log(reverseInteger(-123))

function lcmAndGcd(a, b){
    let gcd;
    let lcm;
    let dividend;
    let divisor;
    let remainder;
    if(a > b){
        dividend = a;
        divisor = b;
    }else {
        dividend = b;
        divisor = a;
    }
    while(divisor !== 1 || remainder !== 0){
        remainder = dividend % divisor;
        if(remainder !== 0){
            dividend = divisor;
            divisor = remainder;
        }else {
            break;
        }
    }
    
    gcd = divisor;
    lcm = (a * b) / gcd;
    return `${lcm} ${gcd}`
}

// console.log(lcmAndGcd(354293,125208))

function sumOfOneDivisors(N){
    if(N === 1){
        return N;
    }

    let sumOfDivisors = null;
    let fiveSum = 1;
    let threeSum = 1;
    let twoSum = 1
    
    let power = 0;
    
    while(N % 5 === 0){
        power++;
        fiveSum += (5**power);
        N = N / 5;
    }
    
    power = 0;
    while(N % 3 === 0){
        power++;
        threeSum += (3**power);
        N = N / 3;
    }
    
    power = 0;
    while(N % 2 === 0){
        power++;
        twoSum += (2**power)
        N = N / 2;
    }
    
    if(N > 1){
        sumOfDivisors = (twoSum * threeSum * fiveSum) * (1 + N)
    }else {
        sumOfDivisors = (twoSum * threeSum * fiveSum)
    }
    
    return sumOfDivisors;
}

function sumOfDivisors(N){
    let sum = 0;
    while(N > 0){
        sum += sumOfOneDivisors(N)
        N--;
    }
    return sum;
}
    

// let sum = sumOfDivisors(5);
// console.log("sum of divisors", sum)

function sumOfDivisors(N) {
    let sum = Array(N + 1).fill(0); // Array to store sum of divisors
    let totalSum = 0;
    // Loop through every number from 1 to N
    for (let i = 1; i <= N; i++) {
        // Add i to all its multiples
        for (let j = i; j <= N; j += i) {
            sum[j] += i;
        }
        totalSum += sum[i]
    }

    // // Total sum of divisors from 1 to N
    // let totalSum = 0;
    // for (let i = 1; i <= N; i++) {
    //     totalSum += sum[i];
    // }

    return totalSum;
}

// let result = sumOfDivisors(10);
// console.log("sum of divisors:", result);

function sumOfDivisors(N)
{
    let totalSum = 0;

    // Loop through every number from 1 to N
    for (let i = 1; i <= N; i++) {
        // Add i to the sum for all multiples of i
        console.log("i",i)
        totalSum += i * Math.floor(N / i);
        console.log("totalSum", totalSum)
    }

    return totalSum;
}

// console.log(sumOfDivisors(10))

function  minJumps(arr) {
    let totalJump = 0;
    let currentValue = arr[0];
    let currentDestination = 0; 
    
    while(currentDestination !== arr.length || currentDestination > arr.length){
        currentDestination = arr.indexOf(currentValue) + currentValue;
        currentValue  = arr[currentDestination];

        console.log("inside whiel loop")
        if(currentValue === 0){
            return -1
        }
        totalJump++;
    }
    return totalJump;
}

console.log(minJumps([1,3,5,8,9,2,6,7,6,8,9]))