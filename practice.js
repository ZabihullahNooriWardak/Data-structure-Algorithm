let calculations = 0;
function fibonacci(n){
  calculations++;
  console.log(calculations);
if(n<2){
  return n;
}
return fibonacci(n-1)+fibonacci(n-2);
}
fibonacci(15);
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610
function fibonacciWithDynamicprogramming(n){
  let fib = [0,1];
  for(let i=2;i<=n;i++){
    fib[i] = fib[i-1]+fib[i-2];
  }
  return fib[n];
}

