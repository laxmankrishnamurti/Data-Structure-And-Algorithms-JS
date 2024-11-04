console.log(0.1 + 0.2 === 0.3);
console.log(1 / 10);

console.log(Math.floor(0.9));
console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.ceil(0.9));

// Number.EPSILON ===> returns the smallest interval between two representable number. This is useful for the problem with floating-point approzimation. It is the smallest difference between two representable numbers.

console.log(Math.abs(0.1 - 0.01)); //0.09000000000000001
console.log(Number.EPSILON); // 2.220446049250313e-16 (2.220446049250313 * 10 res to the power of -16)
console.log(2.220446049250313 / 100000000000000000); // 0.0000000000000002220446049250313

function isEqual(x, y) {
  console.log("x", x);
  console.log("y", y);
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3)); //true

console.log(0.1 + 0.2); //0.30000000000000004

//Difference between operand one and the EPSILON vlaue

console.log("difference", 0.30000000000000004 - 0.3); // 5.551115123125783e-17 ===> 0.0000000000000005551115123125783
console.log("difference", Math.abs(0.30000000000000004 - 0.3)); // 5.551115123125783e-17 ===> 0.00000000000000005551115123125783
console.log(
  0.00000000000000005551115123125783 < 0.0000000000000002220446049250313
); // true

console.log(
  0.00000000000000005551115123125783 - 0.0000000000000002220446049250313
);
// -1.6653345369377348e-16 ===> -0.00000000000000016653345369377348
