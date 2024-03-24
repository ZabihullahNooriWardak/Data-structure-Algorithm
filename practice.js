function outerFunction() {
  var outerVariable = 0;
  
  function innerFunction() {
      outerVariable++;
      console.log(outerVariable);
  }
  
  return innerFunction;
}

var innerFunc1 = outerFunction();
var innerFunc2 = outerFunction();

innerFunc1(); // Output: 1
innerFunc1(); // Output: 2
innerFunc1(); // Output: 3

innerFunc2(); // Output: 1 (Independent from innerFunc1)
innerFunc2(); // Output: 2
