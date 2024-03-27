var rob = function(nums) {
  let totalRob=0;
  let referenceToOriginalArray=nums.slice();
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
let oddTotal=0;
  let evenTotal=0;
    for(let i=0;i<referenceToOriginalArray.length;i++){
      if(i%2===0){
        evenTotal+=referenceToOriginalArray[i];
       }else{
        oddTotal+=referenceToOriginalArray[i];
       }
    }
    if(oddTotal>evenTotal && oddTotal>totalRob){  
      return oddTotal;
    }else if(evenTotal>oddTotal && evenTotal>totalRob){
    return evenTotal;
    }else{
      return totalRob
    }
};

console.log(rob([2,7,9,3,1]));