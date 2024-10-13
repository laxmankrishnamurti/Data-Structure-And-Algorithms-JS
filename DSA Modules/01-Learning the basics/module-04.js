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