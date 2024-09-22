// Anagram ===> An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

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

// let result = isAnagram("anagram", "nagaram");
// console.log("result  : ", result);


function isAnagramFun(s, t) {
  //edge case
  if(s.length === 0 && t.length === 0){
      return true;
  }

  if(s.length !== t.length){
      return false;
  }

  const parentArr = Array.from(s);
  const parentObj = {};
  for(let i = 0; i < parentArr.length; i++){
      if(parentObj.hasOwnProperty(parentArr[i])){
          parentObj[parentArr[i]] += 1;
      }else{
          parentObj[parentArr[i]] = 1;
      }
  }

  const childArr = Array.from(t);
  const childObj = {};
  for(let j = 0; j < childArr.length; j++){
      if(childObj.hasOwnProperty(childArr[j])){
          childObj[childArr[j]] += 1;
      }else {
          childObj[childArr[j]] = 1;
      }
  }

  let comparedResult = compareTwoObjects(parentObj, childObj)
  if(comparedResult){
    return true
  }

  return false;
};

function compareTwoObjects(obj1, obj2){
  console.log("obj1 : ", obj1)
  console.log("obj2 : ", obj2)
  let firstKey = Object.getOwnPropertyNames(obj1).sort();
  let secondKey = Object.getOwnPropertyNames(obj2).sort();
  console.log("firstKey : ", firstKey)
  console.log("secondKey : ", secondKey)

  if(firstKey.length !== secondKey.length){
    return false;
  }

  for(let i = 0; i < firstKey.length; i++){
    if(firstKey[i] !== secondKey[i]){
      return false
    }
  }

  for(let key of firstKey){
    if(obj1[key] !== obj2[key]){
      return false
    }
  }

  return true
}

let isAnagramResult = isAnagramFun("aacc","ccac")
// let isAnagramResult = isAnagramFun("rat","car")
console.log("isAnagram : ", isAnagramResult)


//Optimize solution 

var isAnagram = function(s, t) {
  if (s.length !== t.length) {
          return false;
      }

      const countS = {};
      const countT = {};

      for (let i = 0; i < s.length; i++) {
          countS[s[i]] = 1 + (countS[s[i]] || 0);
          countT[t[i]] = 1 + (countT[t[i]] || 0);
      }

      for (const key in countS) {
          if (countS[key] !== countT[key]) {
              return false;
          }
      }

      return true;
  };