function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    console.log('left', left);
    console.log('right', right);
    return merge(mergeSort(left), mergeSort(right));
}
console.log("nothing333333333333333333333333333333333333333333333333333333333333333333")
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
console.log('leftttttttttttttttttttttt', left);
console.log('righttttttttttttttttttttt', right);
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
console.log("leftlast", left);
console.log("rightlast", right);
console.log("result", result);
console.log("leftIndex", leftIndex);
console.log("rightIndex", rightIndex);
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([4, 3, 2, 1, 5, 6, 7, 8, 9, 10]));