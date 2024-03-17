function mergeSort(arr) {
    if (arr.length <= 1) {
        console.log("Base case reached. Returning:", arr);
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    console.log("Splitting array into left and right halves:");
    console.log("Left:", left);
    console.log("Right:", right);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    console.log("Merging sorted left and right halves:");
    console.log("Sorted Left:", sortedLeft);
    console.log("Sorted Right:", sortedRight);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    console.log("Merging arrays:");
    console.log("Left Array:", left);
    console.log("Right Array:", right);

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    console.log("Merged Result:", result);
    console.log("Left Index:", leftIndex);
    console.log("Right Index:", rightIndex);

    const remainingLeft = left.slice(leftIndex);
    const remainingRight = right.slice(rightIndex);

    console.log("Remaining Left elements:", remainingLeft);
    console.log("Remaining Right elements:", remainingRight);

    return result.concat(remainingLeft, remainingRight);
}

console.log("Initial array:", [4, 3, 2, 1, 5, 6, 7, 8, 9, 10]);
console.log("Sorted array:", mergeSort([4, 3, 2, 1, 5, 6, 7, 8, 9, 10]));
