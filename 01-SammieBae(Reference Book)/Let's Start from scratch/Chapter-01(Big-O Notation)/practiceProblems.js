//1. Print elements that are a power of 2 between 2 to n.

function printN(n) {
  for (let i = 2; i <= n; i *= 2) {
    console.log(i);
  }
}
printN(1000000);
