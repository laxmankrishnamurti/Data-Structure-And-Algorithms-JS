/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //edge case
  if (s.length % 2 !== 0) {
    return false;
  }

  var closeBracket = s.charAt(s.length - 1).charCodeAt(0);
  var openBracket = s.charAt(0).charCodeAt(0);

  if (s.length === 2) {
    if (closeBracket === 41 && openBracket === 40) {
      return true;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let openChar = s.charAt(i).charCodeAt(0);
    let small = undefined;
    if (openChar === 40) {
      for (let j = i; j < s.length; j++) {
        let closeChar = s.charAt(j).charCodeAt(0);
        if (closeChar === 41) {
          small = j;
        }
      }
    }

    let curly = undefined;
    if (openChar === 91) {
      for (let j = i; j < s.length; j++) {
        let closeChar = s.charAt(j).charCodeAt(0);
        if (closeChar === 93) {
          curly = j;
        }
      }
    }

    let big = undefined;
    if (openChar === 123) {
      for (let j = i; j < s.length; j++) {
        let closeChar = s.charAt(j).charCodeAt(0);
        if (closeChar === 125) {
          big = j;
        }
      }
    }

    // if(small && curly || curly && big || small && big){
    //     return true;
    // }

    if (small >= 0 || curly >= 0 || big >= 0) {
      return true;
    } else {
      return false;
    }
  }
};

// GET STUCK AT THIS POINT WHILE FINDING SOLUTION FOR THIS TYPE OF STRING ===> "([)]"

/**
 * REFERENCE
 */

var isValid = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};
