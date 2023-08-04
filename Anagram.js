

function isAnagram(s,t){
    if(s.length!==t.length){
        return false;
    }

    let characterFrequency = {};

    for(const char of s){
        characterFrequency[char] = (characterFrequency[char] || 0)+1;

    }

    for(const char of t){
        if(!characterFrequency[char]){
            return false
        }
        characterFrequency[char]--;
    }
    return true;
}


let s = "anagram";
let t = "nagaram"

let result = isAnagram(s,t);

console.log(result);