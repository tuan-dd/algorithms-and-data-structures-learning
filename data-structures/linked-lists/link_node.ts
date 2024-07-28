export default class ListNode<T = any> {
  next: ListNode<T> | null;
  value: T;
  constructor(value: T, next: ListNode<T> | null = null) {
    this.next = next;
    this.value = value;
  }
}
