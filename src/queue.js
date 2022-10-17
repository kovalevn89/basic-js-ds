const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._lList = null;
    this._current = this._lList;
  }

  getUnderlyingList() {
    return this._lList;
  }

  enqueue(value) {
    let node = new ListNode(value);

    this._lList === null ? this._lList = node : this._current.next = node;

    this._current = node;
  }

  dequeue() {
    let node = this._lList;

    this._lList = this._lList.next;

    return node.value;
  }
}

module.exports = {
  Queue
};
