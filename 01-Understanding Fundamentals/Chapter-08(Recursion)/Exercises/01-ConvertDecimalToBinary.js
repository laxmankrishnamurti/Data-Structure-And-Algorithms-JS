//Iterative solution

function convertDecimalToBinary(n) {
  let binaryFormat = [];
  while (n > 0) {
    let remainder = n % 2;
    binaryFormat.push(remainder);
    n = Math.floor(n / 2);
  }
  //Reverse the array
  if (binaryFormat.length % 2 == 1) {
    for (let i = 0; i <= Math.floor(binaryFormat.length / 2) - 1; i++) {
      let temp = binaryFormat[i];
      binaryFormat[i] = binaryFormat[binaryFormat.length - 1 - i];
      binaryFormat[binaryFormat.length - 1 - i] = temp;
    }
  } else if (binaryFormat.length % 2 == 0) {
    for (let i = 0; i < binaryFormat.length / 2; i++) {
      let temp = binaryFormat[i];
      binaryFormat[i] = binaryFormat[binaryFormat.length - 1 - i];
      binaryFormat[binaryFormat.length - 1 - i] = temp;
    }
  }
  return binaryFormat.join(" ");
}

let decimalNumber = 256;
let binaryFormat = convertDecimalToBinary(decimalNumber);
console.log(binaryFormat);

function convertDecimalToBinaryWithRecursion(n) {
  let binaryString = "";
  function helper(n) {
    if (n < 2) {
      binaryString += n;
      console.log("Binary String is : ", binaryString);
      return n;
    } else {
      helper(Math.floor(n / 2));
      helper(n % 2);
    }
  }
  helper(n);
  return binaryString;
}

let result = convertDecimalToBinaryWithRecursion(256);
console.log("result : ", result);

/**
 * helper(n%2) will not call until the helper(Math.floor(n/2)) not hit the base case.
 * 
 * Let see how stack will look like.
 * 
 CALL STACK

dh -> helper(n/2) :: in short Divide helper
mh -> helper(n%2) :: in short modulo helper = It will get n from the current context of the else block or function-block which will come from call stack that is set by Divide helper function.

dh(1) -> Base case hit :: And will change the binaryString with the value of "1" and return 1
dh(3)
dh(6)
dh(12)
dh(25)
dh(50)
main()
GEC

mh(3%2=1) -> binaryString = "11"
dh(3)
dh(6)
dh(12)
dh(25)
dh(50)
main()
GEC

mh(6%2=0) -> binaryString = "110"
dh(6)
dh(12)
dh(25)
dh(50)
main()
GEC


mh(12%2=0) => binaryString = "1100"
dh(12)
dh(25)
dh(50)
main()
GEC


mh(25%2=1) -> binaryString = "11001"
dh(25)
dh(50)
main()
GEC

mh(50%2=0) -> binaryString = "110010"
dh(50)
main()
GEC

main() -> return binaryString
GEC

GEC -> return undefined

 */

//Note :- If the second function will change the context value of n the first function is also going to call.
