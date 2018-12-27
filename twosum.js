/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

var twoSum = function(nums, target) {
    //create hash
    var hash = {};
    //loop through array,
    for (var i = 0; i < nums.length; i++) {
        //set each index to key
        let current = nums[i];
        hash[current] = i;
    }
    //loop again
    for (var i = 0; i < nums.length; i++) {
        //set difference to target - arr[i]
        let diff = target - nums[i];
        //check hash to see if diff is a prop && if hash[diff] doesnt equal i
        if (hash.hasOwnProperty(diff) && hash[diff] !== i) {
            return [i, hash[diff]]
      }
    }
};