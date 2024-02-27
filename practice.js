
class Stack {
    constructor () {
         this.array_for_stack = [];
    }
    peek() {
        return this.array_for_stack[this.array_for_stack.length-1];
    }
    push(value) {
     this.array_for_stack.push(value)
        return this.array_for_stack[this.array_for_stack.length-1];
    }
    pop() {  
    return  this.array_for_stack.pop();
    }
    isEmpty() {
        if (this.array_for_stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}


let stack = new Stack();
stack.push("zabih")
stack.push("ali")
stack.pop();
console.log(stack.pop());
console.log(stack);



