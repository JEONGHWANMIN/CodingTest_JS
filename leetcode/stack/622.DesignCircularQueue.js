/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.que = [];
  this.front = 0;
  this.rear = -1;
  this.size = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.que.length === this.size) return false;
  this.que.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.que.length === 0) return false;
  this.que.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.que[this.front] ?? -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.que.at(this.rear) ?? -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  if (this.que.length === 0) return true;
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  if (this.que.length === this.size) return true;
  return false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */ /**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.que = [];
  this.front = 0;
  this.rear = -1;
  this.size = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.que.length === this.size) return false;
  this.que.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.que.length === 0) return false;
  this.que.shift();
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.que[this.front] ?? -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.que.at(this.rear) ?? -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  if (this.que.length === 0) return true;
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  if (this.que.length === this.size) return true;
  return false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
