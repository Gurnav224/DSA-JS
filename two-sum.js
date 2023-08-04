// brute force approach 
/*
function bruteForceTwoSum(nums,target){

   for(let i=0; i<nums.length; i++){
    for(let j = i+1; j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            return [i,j];
        }
    }
   }
return [];
}

*/

function twoSum(nums,target){
    const numIndices = {};
    for(let i=0; i<=nums.length; i++){
       const complement = target-nums[i];

       if(numIndices.hasOwnProperty(complement)){
        return[numIndices[complement],i];
       }
       numIndices[nums[i]] = i
    }
    console.log(numIndices);

    return [];

}
let nums = [2,7,11,15];
let target = 9;


const result = twoSum(nums,target)
 console.log(result);


