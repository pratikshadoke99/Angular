function Maximum(...arr:number[]) {
let max = arr[0];
for (let i = 1; i < arr.length; ++i) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Maximum number is",+max);
}
Maximum(23, 89, 6, 29, 56, 45, 77, 32)