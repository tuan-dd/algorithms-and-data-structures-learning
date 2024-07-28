class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let fastPoint = head;
  let slowPoint = head;

  while (fastPoint && fastPoint.next) {
    fastPoint = fastPoint.next.next;
    slowPoint = slowPoint.next;

    if (fastPoint === slowPoint) return true;
  }

  return false;
}
