function findLogBaseTwo(n) {
    console.log("From function")
    let exponential = 0;
    for (let i = 2; i <= n; i = (i * 2)) {
        exponential++
    }
    return exponential
}

let value = findLogBaseTwo(64)
console.log("Exponent value is :", value)

function findLogBaseTen(n) {
    let exponential = 0;
    for (let i = 10; i <= n; i = (i * 10)) {
        exponential++;
    }
    return exponential
}

let parameter = 1000
let baseTenValue = findLogBaseTen(parameter)
console.log("Exponentail value of " + parameter + " in log base 10 is : ", baseTenValue)