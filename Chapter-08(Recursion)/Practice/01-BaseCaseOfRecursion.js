// Print n to 0 using recursion

function countDownToZero(n) {
  if (n < 0) {
    return;
  } else {
    console.log("n is : ", n);
    countDownToZero(n - 1);
  }
}

countDownToZero(10);
