function printNos(n) {
  if (n === 0) {
    return;
  }
  printNos(n - 1);
  process.stdout.write(" " + n);
}

printNos(5);
