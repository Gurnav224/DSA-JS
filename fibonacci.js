

function fibonaci(number){

    if(number===0){
        return 0;
    }
    if(number===1){
        return 1;
    }
    let firstTerm  = 0;
    let secondTerm = 1;
    let thirdTerm;

    for(let i=2; i<=number;i++){
     thirdTerm = firstTerm+secondTerm;;
     firstTerm = secondTerm;
     secondTerm = thirdTerm;
    }

    return thirdTerm;
}


console.log(fibonaci(6))