let str = "aba";
// console.log(str.length);
// console.log(str.substring(0));
// console.log(str.substring(0, 0));
// console.log(str.substring(0, 1));
// console.log(str.substring(0, 2));
// console.log("initial to second last", str.substring(0, str.length - 1));

function getAllPossibleSubstring(str, k) {
  const substringArr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substr = str.substring(i, j + 1);
      if (substr.length >= k) {
        substringArr.push(substr);
      }
    }
  }

  const finalArr = [];
  for (let i = 0; i < substringArr.length; i++) {
    const subStr = substringArr[i];
    const charStorage = [];
    for (let j = 0; j < subStr.length; j++) {
      const character = subStr.charAt(j);
      if (charStorage.indexOf(character) === -1) {
        charStorage.push(character);
      }
    }

    if (charStorage.length === k) {
      finalArr.push(subStr);
    }
  }

  return finalArr.length;
}

const str2 = "aba";
const str2Count = 2;
const str3 = "abaaca";
const str3Count = 1;
const allSubstrings = getAllPossibleSubstring(str2, str2Count);
console.log("allSubstrings", allSubstrings);
