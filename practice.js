var rob = function(nums) {
  let max = nums[0];
  let indexOfMax=0;
  let totalRob=0;
while(nums.length){
  for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
     max=nums[i];
     indexOfMax=i;
    }
    totalRob+=max;
   if(indexOfMax>0){
     nums.splice(indexOfMax-1,3)
   }else{
     nums.splice(indexOfMax,2)
   }
  }
}
return totalRob;
};

console.log(rob([2,1,1,2]));