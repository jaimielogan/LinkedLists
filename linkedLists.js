class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(node){
    this.head = node;
    this.tail = node;
    this.length = 1;
  }
  insert(node, index){
    if(index !== undefined){
      let current = this.head;
      for(var i = 1; i < index; i++){
        current = current.next
      }
      node.next = current.next;
      if(current.next == null){
        this.tail = node;
      }
      current.next = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  delete(index){
    //Need to create the delete functionaity here
  }
}

const food = new LinkedList(new Node('taco'));

console.log('linked list of food:',food);
console.log('the head of the food linked list:',food.head.data);

food.insert(new Node('burrito'));

console.log('linked list of food after inserting a new node:', food);

food.insert(new Node('chocolate'), 1);

console.log(JSON.stringify(food, null, 2));
