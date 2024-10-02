//Median :: In even set -> Average of two middle numbers; In odd ser -> The middle one

let evenSet = [23, 223, 45, 21];
let oddSet = [1, 32, 423, 54, 23];

function getMedian(arr) {
  let length = arr.length;
  let median;
  if (length % 2 === 0) {
    median =
      (arr[Math.floor(length / 2)] + arr[Math.floor(length / 2) - 1]) / 2;
    return median;
  } else {
    median = arr[Math.floor(length / 2)];
  }

  return median;
}

let medianOfEvenSet = getMedian(evenSet);
console.log("medianOfEvenSet is :: ", medianOfEvenSet);

let medianOfOddSet = getMedian(oddSet);
console.log("medianOfOddSet is :: ", medianOfOddSet);

function medianOfTwoSortedArray(arr1, arr2, length) {
  //edge-case-01
  if (length === 0) {
    return -1;
  }

  //edge-case-02
  if (length === 1) {
    return (arr1[0] + arr2[0]) / 2;
  }

  //edge-case-03
  if (length === 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  let median1 = getMedian(arr1),
    median2 = getMedian(arr2);

  let combineMedian = (median1 + median2) / 2;
  return combineMedian;
}

let getComMedian1 = medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3);
console.log("get first combine median :: ", getComMedian1);

let getComMedian2 = medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3);
console.log("get second combine median :: ", getComMedian2);

let getComMedian3 = medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3);
console.log("get third combine median :: ", getComMedian3);
