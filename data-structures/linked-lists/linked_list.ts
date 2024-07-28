import ListNode from "./link_node";

export default class LinkedList<T = any> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  size = 0;
  compare: (a: T, b: T) => 1 | 0 | -1;
  constructor(compare?: typeof this.compare) {
    this.head = null;
    this.tail = null;
    this.compare = compare || this.defaultCompareFunction;
  }

  private defaultCompareFunction(a: T, b: T) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  private equal(a: T, b: T) {
    return this.defaultCompareFunction(a, b) === 0;
  }
  prepend(value: T) {
    const newNode = new ListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  append(value: T) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.size++;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  pod() {
    if (!this.head) throw new Error();

    const deletedTail = this.tail;

    // There is only one node in linked list.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail.value;
    }

    let currentNode = this.head;
    let nextNode = this.head.next;

    while (nextNode) {
      if (!nextNode.next) {
        this.tail = currentNode;
        this.tail.next = null;
      } else {
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
    }
    this.size--;
    return deletedTail;
  }

  shift() {
    if (!this.head) throw new Error();

    const deletedTail = this.head;

    // There is only one node in linked list.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail.value;
    }

    this.size--;
    this.head = this.head.next;
    return deletedTail;
  }

  delete(value: T) {
    if (!this.head) throw new Error();

    while (this.head && this.equal(this.head.value, value)) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (!currentNode) {
      while (currentNode.next) {
        if (this.equal(currentNode.next.value, value)) {
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // check tail
    if (this.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return this;
  }

  find(value: T, callback?: (value: T) => unknown) {
    if (this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (currentNode.value && this.compare(currentNode.value, value)) {
        return currentNode;
      }
    }

    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (!currentNode.next.next) {
        this.tail = currentNode;
        this.tail.next = null;
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }

    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    const deletedTail = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    this.head = deletedTail.next;

    return deletedTail;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  }
}
