

function containsDuplicate(nums){
     let isFound = false;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
         if(nums[i]===nums[j]){
            isFound = true;
         }
        }
    }

    return isFound;
}

let nums = [1,2,3,1];

 let result = containsDuplicate(nums);

// console.log(result)

// 

function containsDuplicate2(nums){
    const numSet = new Set();

    for(const num of nums){
        
        if(numSet.has(num)){
            return true
        }
        numSet.add(num)
    }
  return false;
}

let result2 = containsDuplicate2(nums);

console.log(result2);