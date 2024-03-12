function bubbleSort(arr) {
  let swap;
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }


  } while (swap);
  return arr;
}

let unsortedArray = [8, 2, 88, 3, 23];
console.log(bubbleSort(unsortedArray));

//teacher solution 
function bubbleSort2(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort2(unsortedArray));