function Maximum(...arr:number[]) {
let first = arr[0]
let second = arr[0]
for (let i = 1; i < arr.length; ++i) {
  if (arr[i] > first) {
    second = first
    first = arr[i]
  }
  else if(arr[i]>second && arr[i] !=first){
    second=arr[i]
  }
}
console.log("Second Maximum number is",+second);
}
Maximum(23, 89, 6, 29, 56, 45, 77, 32)