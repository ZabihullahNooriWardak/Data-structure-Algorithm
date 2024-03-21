//binary search is algorithm used for searching in sorted array but bst is data structure
// and here is the implmentation of binary search algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    // Check if the target is present at mid
    if (arr[mid] === target) {
      return mid;
    }
    
    // If target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    }
    
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }
  
  // If target is not present in the array
  return -1;
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 13;
const index = binarySearch(arr, target);

if (index !== -1) {
  console.log(`${target} found at index ${index}.`);
} else {
  console.log(`${target} not found in the array.`);
}
