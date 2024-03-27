
var rob = function(nums) {
  let totalRob=0;
  let referenceToOriginalArray=nums.slice();
  let checkArrayElement=true;
while(checkArrayElement){
  let max = nums[0];
  let indexOfMax=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]>=max){
     max=nums[i];
     indexOfMax=i;
    }
  }
  totalRob+=max;
   if(indexOfMax>0){
     nums.splice((indexOfMax-1),3,0,0,0)
   }else{
     nums.splice(indexOfMax,2,0,0)
   }
   checkArrayElement=false;
   for(let i=0;i<nums.length;i++){
         if(nums[i]!==0){
          checkArrayElement=true;
          break;
         }
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
console.log(rob([6,3,10,8,2,10,3,5,10,5,3]))

//still fails in this test Case : [8,9,9,4,10,5,6,9,7,9]
// now fails in this : [183,219,57,193,94,233,202,154,65,240,97,234,100,249,186,66,90,238,168,128,177,235,50,81,185,165,217,207,88,80,112,78,135,62,228,247,211]