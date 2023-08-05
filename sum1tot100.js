

function sum1To100(number){
    let sum = 0;
    for(let i=1; i<=number; i++){
      sum = sum+i
    }
    return sum;
}

let result = sum1To100(100);

console.log(result)