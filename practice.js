//js practice 

// one way of adding event listener
var button = document.getElementById("myButton");
button.onclick = function() {
  alert("Button clicked!");
};
//another way
var button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});
// inline way 
<button onclick="handleClick()">Click Me</button>
