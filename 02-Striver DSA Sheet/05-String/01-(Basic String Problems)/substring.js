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
// console.log("allSubstrings", allSubstrings);

const charMap = {
  name: "laxmankrishnamurt",
  age: 22,
  email: "laxmankrishnamurti@gmail.com",
};

const keys = Object.keys(charMap);
console.log("keys", keys);

function kString(str, k) {
  function outmostKSubstring(k) {
    let left = 0;
    let charMap = new Map();
    let uniqueCharacter = 0;
    let result = 0;

    for (let right = 0; right < str.length; right++) {
      const rightCharacter = str[right];

      if (!charMap.has(rightCharacter) || charMap.get(rightCharacter) === 0) {
        uniqueCharacter++;
      }

      charMap.set(rightCharacter, (charMap.get(rightCharacter) || 0) + 1);

      while (uniqueCharacter > k) {
        let leftCharacter = str[left];
        charMap.set(leftCharacter, charMap.get(leftCharacter) - 1);

        if (charMap.get(leftCharacter) === 0) {
          uniqueCharacter--;
        }

        left++;
      }

      result += right - left + 1;
    }

    return result;
  }

  return outmostKSubstring(k) - outmostKSubstring(k - 1);
}

function longestPalindromicSubstring(s) {
  let max = 0;
  let start = 0;
  let end = 0;

  function isPalindrom(str, i, j) {
    while (i < j) {
      if (str.charAt(i) !== str.charAt(j)) {
        return false;
      }
      i++;
      j--;
    }

    return true;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrom(s, i, j)) {
        if (j - i + 1 > max) {
          max = j - i + 1;
          start = i;
          end = j;
        }
      }
    }
  }

  return s.substring(start, end + 1);
}

const longSubstr = longestPalindromicSubstring("babad");
console.log("long substr", longSubstr);
