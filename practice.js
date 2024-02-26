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

    }
    isEmpty() {
        if (this.length === 0) {
            return true;
        }else {
            return false;
        }
    }
}


let stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);