//1.  Print numbers from 1 to n without the help of loops. You only need to complete the function printNos() that takes N as parameter and prints number from 1 to N recursively.

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

// printNos(5);

//2. Print "GFG", n times without the loop.

function printStr(n, origin = n) {
  if (n === 0) {
    return;
  }

  process.stdout.write("GFG" + " ");
  printStr(n - 1, origin);

  if (n === origin) {
    process.stdout.write("\n");
  }
}

printStr(10);
