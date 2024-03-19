function quickSort(arr){
if(arr.length<=1){
    return arr;
}
let arrLeft=[];
let arrRight=[];
let pivot = arr[Math.floor(arr.length/2)];
for(let i=0;i<arr.length;i++){
  if(arr[i]<pivot ||(arr[i]===pivot && i !==Math.floor(arr.length/2) )){
    arrRight.push(arr[i]);
  }
  if(arr[i]>pivot){
    arrLeft.push(arr[i]);
  }
}
return [...quickSort(arrRight),pivot,...quickSort(arrLeft)];
}
let myArray=[99,3,22,42,4,9,111,22];
console.log(quickSort(myArray));



