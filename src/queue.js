const { NotImplementedError } = require("../extensions/index.js");

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
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    // добавляем в конец очереди
    const node = new ListNode(value);
    // создаём ноду с класом нод

    if (this.first) {
      // если существует первая нода
      this.last.next = node; // добавляем после последнего элемента
      this.last = node; // созданный нами становится последним
    } else {
      // если первой не существует, то созданная нода сразу первая и последняя
      this.first = node;
      this.last = node;
    }
  }

  dequeue() {
    // удаляем из очереди
    const current = this.first; // сохраняем сслку на первый элемент, который хотим удалить 
    this.first = this.first.next; // второй элемент в очереди становится ПЕРВЫМ

    return current.value; // возвращаем значение того элемента, который удалили
  }
}

module.exports = {
  Queue,
};
