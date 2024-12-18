const marks = [1, 2, 3, 4, 5];
console.log(marks["1"]);

console.log(Object.getOwnPropertyNames(marks));
for (let key in marks) {
  console.log("key", key);
}

const literalMarks = {
  1: "This is one",
};

console.log(literalMarks[1]);
