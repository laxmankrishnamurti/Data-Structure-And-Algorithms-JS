function printOne() {
  console.log(1);
  printOne();
}

function parentFunction() {
  printOne();
}

// parentFunction();

let i = 1;
function printTable(n) {
  if (i === 11) {
    return;
  }
  console.log(n * i);
  i++;
  printTable(n);
}

printTable(2);
