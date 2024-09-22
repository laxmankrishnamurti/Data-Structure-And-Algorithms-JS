var isAnagram = function (s, t) {
  //Edge case
  if (s.length === 0 && t.length === 0) {
    return true;
  }

  let result = [];
  for (let i = 0; i < s.length; i++) {
    console.log("s : ", s.charAt(i));
    for (let j = 0; j < t.length; j++) {
      console.log("t : ", t.charAt(j));
      if (s.charAt(i) === t.charAt(j)) {
        result.push(1);
        break;
      }
    }
  }

  if (result.length !== s.length) {
    return false;
  }

  return true;
};

let result = isAnagram("anagram", "nagaram");
console.log("result  : ", result);
