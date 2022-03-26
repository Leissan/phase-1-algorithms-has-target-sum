function hasTargetSum(array, target){
//Iterate through each number in the array
for (let i = 0; i < array.length; i++) {
  //for the current numebr, identify complement that adds to the target (comp=target - current numebr)
  const complement = target - array[i]
  //iterate through the rest of the array
  for (let j = i + 1; j < array.length; j++){
   //check if any numebr is a compliment
   //if so, return true
    if (array[j] === complement) return true
  }
}
//if i reach the end of the array, and no 2 numebrs addup to the target sum, return false
return false
}




/*function hasTargetSum(array, target) {
  let i = 0;
  let j = 1;
  while (j < array.length){
      let sum = array[i] + array[j]
      if (sum === target) return true;
    
      if (j === array.length-1){
          i++
          j=i
      }
      j++

  }
}*/
/*Another working solution:
function hasTargetSum(array, target) {
  for( let i = 0; i < array.length; i++) {
      for( let j = i+1; j < array.length; j++) {
          if (target === array[i] + array[j]) return true     
      }
  }
  return false
}
*/

 // Write the Big O time complexity of your function here


/* 
  Add your pseudocode here:
  Iterate through each number in the array
  for the current numebr, identify compliment that adds to the target (comp=target - current numebr)
  iterate through the rest of the array, and chekc if any numebr is a compliment
  if so, return true

  if i reach the end of the array, and no 2 numebrs addup to the target sum, return false

  
*///sum up array with position in index 0 with all the other positions one by 
//one; if the sum equals target, we are done. If not, take index 1 and do the same,
// then index 2.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
