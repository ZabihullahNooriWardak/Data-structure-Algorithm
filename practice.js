class Node {
  constructor (value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //we should go to the left side of the tree  or branch of the tree .
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          //we should move the right side of the tree or the branch of the  tree .
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode=currentNode.right;
        }
      }
    }
  }
  lookup(value) {
     let currentNode = this.root;
     while(true){
      if(value===currentNode.value){
        return currentNode;
      }else{
        if(value<currentNode.value){
          currentNode=currentNode.left;
        }else if(value >currentNode.value){
          currentNode=currentNode.right;
        } else if(currentNode.value === value){
          return currentNode;
        }else if(currentNode.value==null){
          return "Your value can't be found in this tree😁"
        }
      }
     }

  }

  remove(value) {

  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);
// JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}