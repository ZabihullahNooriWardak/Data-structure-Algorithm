const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//this one is my own solution it works but it is different with teacher
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

// And this is teacher solution in video 
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        // Set current index as minimum
        let min = i;
        let temp = array[i];

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                // Update minimum if current is lower that what we had previously
                min = j;
            }
        }

        array[i] = array[min];
        array[min] = temp;
    }

    return array;
}

console.log(selectionSort(numbers));