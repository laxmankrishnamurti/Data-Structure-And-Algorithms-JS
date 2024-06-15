// import isEqual from "lodash"

const user = {
    name: "Laxman",
    age: 21,
    status: "Student"
}

const person = {
    name: "Harshad",
    age: 21,
    status: "Trader"
}

const person2 = {
    name: "Harshad",
    age: 21,
    status: "Trader"
}

console.log(user == person)         //Output :- false
console.log(person == person2)      //Output :- false
console.log(person === person2)     //Output :- false

// console.log("loadash result :: ", isEqual(person, person2))


/**
    Output ::
    loadash result ::  LodashWrapper {
        __wrapped__: { name: 'Harshad', age: 21, status: 'Trader' },
                __actions__: [],
                __chain__: false,
                __index__: 0,
                __values__: undefined
}

Honestly speaking i don't understand. Haaaaaaaa.......

*/

// let result = isEqual(person, person2);
// console.log("loadash result is : ", result) //Output : Same result as previous one



/**
 * Write a program that will take two objects as an arguments and will check whether both objects are equal or not?
 */

function isEqual(x, y) {
    const xProps = Object.getOwnPropertyNames(x);
    const yProps = Object.getOwnPropertyNames(y);

    //if the lenght of it's own propery will different
    if (xProps.length !== yProps.length) {
        return false;
    }

    //checking both object's value 
    for (let i = 0; i < yProps.length; i++) {
        let propName = yProps[i]

        if (y[propName] !== x[propName]) {
            return false;
        }
    }

    return true;
}

let checkResult = isEqual(person, person2);
console.log("Is equal : ", checkResult);

//Comparing two functions by pointing towards the same function instance.

const hello = function () {
    console.log("Hello world!!!");
}

const sayHello = hello

console.log(sayHello == hello)      //Output :- true