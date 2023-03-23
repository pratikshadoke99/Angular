function Summation(...arr:number[]) {
var sum = 0;
       for(var i=0; i < arr.length ; i++)
        sum = sum + arr[i];
      

console.log("Addition is",+sum);
} 
Summation(23, 6, 7, 4, 5, 7)