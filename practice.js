const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//this one is my own solution
function selectionSort(array) {
  //Code Here
  let i = 0;
  while (i < array.length) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        let pointerToi = array[i];
        array[i] = array[j];
        array[j] = pointerToi;
      }
    }
    i++;
  }
  return array;
}

console.log(selectionSort(numbers));