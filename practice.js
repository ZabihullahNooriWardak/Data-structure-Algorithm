var rob = function(nums) {
  let totalRob=0;
  //[1,2,3,1]
while(nums.length){
  let max = nums[0];
  let indexOfMax=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
     max=nums[i];
     indexOfMax=i;
    }
  }
  totalRob+=max;
   if(indexOfMax>0){
     nums.splice((indexOfMax-1),3)
   }else{
     nums.splice(indexOfMax,2)
   }
}
return totalRob;
};

console.log(rob([1,2,3,1]));