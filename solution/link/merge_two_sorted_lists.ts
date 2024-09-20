import ListNode from "./list_node";

function mergeTwoListsDennis(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;

  const mergeNode = new ListNode();

  let nextNode = mergeNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      nextNode.val = list1.val;
      list1 = list1.next;
    } else {
      nextNode.val = list2.val;
      list2 = list2.next;
    }
    nextNode.next = new ListNode();
    nextNode = nextNode.next;
  }

  nextNode.next = list1 ? list1 : list2;
  return mergeNode;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const mergedHead: ListNode = new ListNode(-1, null);
  let prev: ListNode = mergedHead;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  prev.next = list1 ? list1 : list2;

  return mergedHead.next;
}

const list1node1 = new ListNode(1);
const list1node2 = new ListNode(2);
const list1node3 = new ListNode(4);

list1node1.next = list1node2;
list1node2.next = list1node3;

const list2node1 = new ListNode(1);
const list2node2 = new ListNode(2);
const list2node3 = new ListNode(4);

list2node1.next = list2node2;
list2node2.next = list2node3;

// node1.next = node2;
// console;

console.log(mergeTwoLists(list1node1, list2node1).val);
