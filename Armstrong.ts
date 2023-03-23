function ChkArmstrong(No1:number) {
let numberOfDigits = No1.toString.length
let sum = 0
while (No1 > 0){
  let remainder = No1 % 10
  sum += remainder ** numberOfDigits
}
if(sum == No1)
console.log("It is Armstrong number");
else
console.log("No")
}
ChkArmstrong(153)