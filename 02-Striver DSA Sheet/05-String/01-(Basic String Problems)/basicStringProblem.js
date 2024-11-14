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
