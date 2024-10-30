function frequencyCount(arr, N, P) {
  let hash = Array(N).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= N) {
      hash[arr[i] - 1] += 1;
    }
  }

  for (let i = 0; i < hash.length; i++) {
    arr[i] = hash[i];
  }

  for (let i = N; i < arr.length; i++) {
    arr[i] = 0;
  }

  return hash;
}

console.log("result", frequencyCount([1, 2, 3, 3, 2, 4, 5, 6, 7, 8], 4, 3));
