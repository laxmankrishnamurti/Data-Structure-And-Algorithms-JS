function findLogBaseTwo(n) {
    console.log("From function")
    let exponential = 0;
    for (let i = 2; i <= n; i = (i * 2)) {
        exponential++
    }
    return exponential
}

let baseTwoParameter = 2048
let baseTwoValue = findLogBaseTwo(baseTwoParameter)
console.log("Exponentail value of " + baseTwoParameter + " in log base 2 is : ", baseTwoValue)


function findLogBaseTen(n) {
    let exponential = 0;
    for (let i = 10; i <= n; i = (i * 10)) {
        exponential++;
    }
    return exponential
}

let baseTenParameter = 1025458965
let baseTenValue = findLogBaseTen(baseTenParameter)
console.log("Exponentail value of " + baseTenParameter + " in log base 10 is : ", baseTenValue)