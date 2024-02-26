class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        let node = new Node(value);
        if (!this.top) {
            this.bottom = node;
            this.top = this.bottom;
            this.length++;
            return this.top;
        }
        let currentNode = this.bottom;
        let counter = 1;
        while (counter < this.length) {
            currentNode = currentNode.next;
            counter++;
        }
        currentNode.next = node;
        this.top = currentNode.next;
        this.length++;
        return this.top;
    }
    pop() {
        if (this.length === 0) {
            return "nothing to pop";
        }
        if (this.length === 1) {
            this.bottom = null;
            this.length--;
            return;
        }
        let counter = 1;
        let currentNode = this.bottom;
        while (counter < this.length - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        currentNode.next = null;
        this.top = currentNode;
        this.length--;
        return currentNode;
    }
    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}


let stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log(stack);