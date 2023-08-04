


function isPalindrome(x){
if(x<0){
    return false;
}

let orginal = x;
let reversed = 0;

while(x>0){
    const digit = x%10;
    reversed = reversed*10+digit;
    x = Math.floor(x/10);
}

return orginal === reversed;

}


let result = isPalindrome(121);

// console.log(result);

function isPalindrome2(x){
    if(x<0 || (x!==0 && x%10===0)){
        return false;
    }

    let reversed = 0;

    while(x>reversed){
        const digit = x%10;
        reversed = reversed*10+digit;
        x = Math.floor(x/10);
    }

    return x===reversed || x===Math.floor(reversed/10);
}



