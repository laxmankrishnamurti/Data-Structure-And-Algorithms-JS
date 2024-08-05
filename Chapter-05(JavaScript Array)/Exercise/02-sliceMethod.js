function slice(arr, startIndex, endIndex) {
  //edge-case-01 (if no parameter passed, return the array)
  if (!startIndex && !endIndex) {
    return arr;
  }

  //edge-case-02 (if only begining index is found, set endIndex to the lenght of the array)
  if (!endIndex) {
    endIndex = arr.length;
  }

  let getSlice = [];
  for (let i = startIndex; i < endIndex; i++) {
    getSlice.push(arr[i]);
  }

  return getSlice;
}

let array = [5, 64, 35, 6, 7774, 2, 345, 3, 4, 5, 6, 7, 4, 2, 245];
let getChunk1 = slice(array, 1, 4);
console.log("getChunk1 :: ", getChunk1);

let getChunk2 = slice(array);
console.log("getChunk2 :: ", getChunk2);

let getChunk3 = slice(array, 3);
console.log("getChunk3 :: ", getChunk3);
