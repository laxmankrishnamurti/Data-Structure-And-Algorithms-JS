function printOne() {
  console.log(1);
  printOne();
}

function parentFunction() {
  printOne();
}

parentFunction();
