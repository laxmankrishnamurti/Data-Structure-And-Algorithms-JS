// O(1)

const marks = [95, 85, 79, 91, 89, 92, 95]
// console.log(marks[3])

// O(n) :- Linear time      (Large amount of data cause high time complexity and vise-versa.)

for (let i = 0; i < 10; i++) {
    // console.log(i)
}

// O(n^2) :- Quadratic time   (less data inputs)

for (let i = 0; i < 3; i++) {
    // console.log("i is : ", i);
    for (let j = i; j < 3; j++) {
        // console.log("j is : ", j);
    }
}

// O(n^3) :- Cubic time     (less data inputs)

for (let i = 0; i < 4; i++) {
    // console.log("i is : ", i);
    for (let j = i; j < 4; j++) {
        // console.log("j is : ", j);
        for (let k = j; k < 4; k++) {
            // console.log("k is : ", k);
        }
    }
}


/**
 * Nested loop cause high time complexity. 
 */


// O(log n)  :- Logrithmic time complexity 

function checkLogComplexity(n) {
    for (let i = 2; i < n; i = (i * 2)) {
        console.log("i is : ", i)
    }
}

// checkLogComplexity(10)

//Note :- The efficiency of logarithmic time complexities is apparent with large inputs such as a million items. 

checkLogComplexity(100000000)