//2,3,8,9,2,33,1
var rob = function(nums) {
    //memoization array
  let db=new Array(nums.length);
  db[0]=nums[0];
  //e
  db[1]=Math.max(nums[0],nums[1]);
  for(let i=2;i<nums.length;i++){
    //core logic of the function
    db[i]=Math.max(db[i-2]+nums[i],db[i-1]);
  }
  //
  return db[db.length-1];
};
console.log(rob([2,0,1,2]))

//still fails in this test Case : [8,9,9,4,10,5,6,9,7,9]
// now fails in this : [183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]














