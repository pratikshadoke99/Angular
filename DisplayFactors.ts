function DisplayFactors(No : number) {
   for(let i = 1; i < No; i++) {
    if(No % i == 0) {
        console.log(i);
    }
}
}
DisplayFactors(20)