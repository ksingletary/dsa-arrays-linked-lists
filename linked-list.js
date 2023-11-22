/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if(!this.head){                 //if no head, means theres no linked list, so we create head and tail. error handling
      this.head = newNode;
      this.tail = newNode;
    } else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if(!this.head){
      this.head = newNode; 
      this.tail = newNode;
    } else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1)
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head){
      return null
    }
    const shiftedVal = this.head.val
    this.head = this.head.next
    this.length--;
    if (this.length === 0) this.tail = null;
    return shiftedVal
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let curr = this.head;
    for (let i = 0; i < idx; i++){
      curr = curr.next
    }
    return curr.val

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return null;
    let curr = this.head;
    for (let i= 0; i < idx; i++){
      curr = curr.next
    }
    curr.val = val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx >= this.length) return null;
    const newNode = new Node(val)
    let curr = this.head
    for (let i= 0; i < idx; i++){
      curr = curr.next
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let curr = this.head;
    for (let i= 0; i < idx; i++){
      curr = curr.next
    }
    const removedVal = curr.next.val;
    curr.next = curr.next.next;
    this.length--;
    return removedVal
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let sum = 0;
    let curr = this.head;
    while(curr){
      sum += curr.val;
      curr = curr.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
