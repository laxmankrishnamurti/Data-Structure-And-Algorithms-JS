function printNos(n, origin = n) {
  if (n === 0) {
    return;
  }
  printNos(n - 1, origin);
  process.stdout.write(" " + n);

  if (n === origin) {
    process.stdout.write("\n");
  }
}

printNos(5);
