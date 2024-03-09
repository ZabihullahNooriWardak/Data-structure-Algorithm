// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//first solution By me
function fibonacciIterative(n) {

  let firstIndex = 0;
  let secondIndex = 1;
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let forReturn;
    for (let i = 2; i <= n; i++) {
      forReturn = firstIndex + secondIndex;
      firstIndex = secondIndex;
      secondIndex = forReturn;
    }
    return forReturn;
  }
}

// second solution using teacher method
function fibonacciIterative(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}

// third solution using teacher solution
function fibonacciRecursive(n) {
if(n<2){
  return n;
}
return fibonacciRecursive(n-2)+fibonacciRecursive(n-1);
}
