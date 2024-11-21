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
// console.log("largestOddNumber", largeOddNumber);

/**
 * Isomorphic string
 */

function IsomorphicFunc(s, t) {
  if (s.length !== t.length) return false;

  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (sToT.has(charS) && sToT.get(charS) !== charT) ||
      (tToS.has(charT) && tToS.get(charT) !== charS)
    ) {
      return false;
    }

    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }

  return true;
}

function isomorphic(s, t) {
  const smap = new Map();
  const tmap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    console.log(smap.get(charS));

    smap.set(charS, charT);
    tmap.set(charT, charS);
  }

  console.log("smap", smap);
  console.log("tmap", tmap);
}

// isomorphic("egg", "add");

/**
 * Note :: Map is used in place where we need sort of Hashing. Like storing references in the form of key-value pairs.
 * .has(key) ==> Is used to check whether a key is available in the map or not
 * .get(key) ==> Is used to get the value of the key.
 * 
 * We can run loop on the map as we do with array. like using "for of" or "forEach" 
 * 
 * 

const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

for (const [key, value] of myMap) {
  console.log(key, value);
}

myMap.forEach((value, key) => {
  console.log(key, value);
});


 */

/**
 * Valid Anagram
 */

function validAnagram(s, t) {
  if (s.length !== t.length) false;

  let smap = new Map();
  let tmap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (smap.has(s.charAt(i))) {
      smap.set(s.charAt(i), smap.get(s.charAt(i)) + 1);
    } else {
      smap.set(s.charAt(i), 0);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tmap.has(t.charAt(i))) {
      tmap.set(t.charAt(i), tmap.get(t.charAt(i)) + 1);
    } else {
      tmap.set(t.charAt(i), 0);
    }
  }

  console.log("smap", smap);
  console.log("tmap", tmap);

  console.log(smap == tmap);
}

// validAnagram("anagram", "nagaram");

let str = "laxman";
let i = 0;
// for (; i < str.length; i++) {
//   console.log(str.charCodeAt(i) - 97);
// }

function isValidAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    console.log("arr", arr);
    arr[s.charCodeAt(i) - 97]++;
    console.log("arr", arr);
    arr[t.charCodeAt(i) - 97]--;
  }
  console.log("out arr", arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }

  return true;
}

// console.log(isValidAnagram("cat", "tac"));

function sortString(str) {
  let strMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (strMap.has(str.charAt(i))) {
      strMap.set(str.charAt(i), strMap.get(str.charAt(i)) + 1);
    } else {
      strMap.set(str.charAt(i), 1);
    }
  }

  console.log("strMap", strMap);

  const sortedMap = new Map([...strMap.entries()].sort((a, b) => b[1] - a[1]));

  let sortedStr = "";
  for (const [key, value] of sortedMap) {
    sortedStr += `${key}`.repeat(value);
  }

  console.log("sortedStr", sortedStr);
}

// sortString("tree");

function findMaxDepth(s) {
  let newStr = s.replace(/[0-9]/, " ");
  console.log("newStr", newStr);
}

// findMaxDepth("(1+(2*3)+((8)/4))+1");

function myAtoi(s) {
  let newStr = s.replace(/\s/g, "");
  console.log("newStr", newStr);
  const wordChecker = newStr.match(/^[a-zA-Z]/g);
  if (wordChecker) {
    return 0;
  }
  let result;
  newStr.replace(/-?[0-9]+/, function (val) {
    result = val;
  });

  return result;
}
// let number = myAtoi("-91283472332");
// console.log("number", number);

function myAtoi2(s) {
  let newStr = s.trim();

  // Step 2: Match the optional sign and digits at the beginning
  let match = newStr.match(/^([+-]?\d+)/);
  if (!match) {
    // If no valid number found, return 0
    return 0;
  }

  // Step 3: Parse the matched number
  console.log("match", match);
  let result = parseInt(match[0]);

  // Step 4: Enforce 32-bit signed integer boundaries
  let INT_MIN = -2147483648;
  let INT_MAX = 2147483647;
  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}

// console.log("result", myAtoi2("asdf-9zsdfasd1283472332"));

function substring(str, k) {
  let substringArr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substring = str.slice(i, j + 1);
      if (substringArr.indexOf(substring) === -1 && substring.length >= k) {
        substringArr.push(substring);
      }
    }
  }

  const finalArr = [];

  substringArr.map((str) => {
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        console.log("str", str);
        console.log("i str", str[i]);
        console.log("j str", str[j]);
        if (str[i] !== str[j]) {
          count++;
        } else {
          count--;
        }

        console.log("count", count);
        if (count >= k) {
          finalArr.push(str);
        }
      }
    }
  });

  console.log("substrArr", substringArr);
  console.log("finalArr", finalArr);
  return substringArr.length;
}

const substringWithKDistinct = substring("aba", 2);
console.log(substringWithKDistinct);
