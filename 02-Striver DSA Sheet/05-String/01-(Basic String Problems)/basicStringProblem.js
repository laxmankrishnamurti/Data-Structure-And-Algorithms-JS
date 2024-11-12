function reverseWord(s) {
  let str = s.trim().replace(/\s+/g, " ");
  console.log("str", str);
  let reverseArr = [];
  let word = "";

  for (let char of str) {
    if (char !== " ") {
      word += char;
      if (char === str.charAt(str.length - 1)) {
        reverseArr.unshift(word);
        word = "";
      }
    } else {
      reverseArr.unshift(word);
      reverseArr.unshift(" ");
      word = "";
    }
  }

  return reverseArr.join("");
}

// console.log(reverseWord("a good   example"));

function reverseWord1(s) {
  //   let str = s.trim().replace(/\s+/g, " ");
  //   let reverse = [];

  //   str.replace(/\S+/g, function (word) {
  //     console.log("word", word);
  //     reverse.unshift(word);
  //   });

  //   return reverse.join(" ");

  let str = s.trim().replace(/\s+/g, " ");
  let reverse = "";

  str.replace(/\S+/g, function (word) {
    reverse += `${word} `;
  });

  return reverse;
}

// let reverseStr = reverseWord1("   the         sky    is    blue");
// console.log(reverseStr);

var largestOddNumber = function (num) {
  num = Number(num);
  if (num % 2 !== 0) return String(num);

  while (num) {
    if (num % 2 === 0) {
      num = Math.floor(num / 10);
    } else {
      return num;
    }
  }

  if (num === 0) {
    return "";
  }

  return String(num);
};

const largeOddNumber = largestOddNumber("239537672423884969653287101");
console.log("largestOddNumber", largeOddNumber);
