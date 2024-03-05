// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  return answer;
}

function findFactorialIterative(number) {
  let answer=1;
 for(let i=number;i>0;i--){
   answer=answer*i;
 }
  return answer;
}

console.log(findFactorialIterative(3));