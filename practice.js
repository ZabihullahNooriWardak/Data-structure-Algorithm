class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let pointerToFirst = this.first;
            this.first = newNode;
            this.first.next = pointerToFirst;
            this.last = pointerToFirst;
        }
        this.length++;
    }
    dequeue() {
        if (this.length === 0) {
            return "nothing to dequeu";
        }
        if (this.length === 1) {
            this.first = null;
            this.last = this.first;
            return;
        }
        let pointerToFirst = this.first;
        this.first = pointerToFirst.next;
        this.length--;
    }
    isEmpty() {
        this.length === 0 ? true : false;
    }
}

const myQueue = new Queue();

myQueue.enqueue(" Joy");
myQueue.enqueue("ali");
myQueue.enqueue(" max");
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
//Matt
//Pavel
//Samir