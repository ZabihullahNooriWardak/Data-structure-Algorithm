var rob = function(nums) {
  let oddTotal=0;
  let evenTotal=0;
    for(let i=0;i<nums.length;i++){
      if(i%2===0){
        evenTotal+=nums[i];
       }else{
        oddTotal+=nums[i];
       }
    }
    if(oddTotal>=evenTotal){
      return oddTotal;
    }
    return evenTotal;
};

//[3,2,5,2,2,9,7,6,9,3]




