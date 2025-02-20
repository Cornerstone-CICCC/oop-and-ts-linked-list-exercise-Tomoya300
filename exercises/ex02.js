// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require('../lib/DLL');

function deleteAllNodesWithValue(list, value) {
  let runner = list.head

  while (runner !== null) {
    if (runner.data === value) {
      currSize = list.length()
      
      if (runner === list.head) {
        list.head = list.head.next
        runner = runner.next
        list.setSize(currSize - 1)
      } else if (runner === list.tail) {
        list.tail = list.tail.prev
        list.tail.next = null
        runner = runner.next
        list.setSize(currSize - 1)
      } else {
        runner.next.prev = runner.prev
        runner.prev.next = runner.next
        runner = runner.next
        list.setSize(currSize - 1)
      }
    } else {
      runner = runner.next
    }
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);
list.insertAtBack(6)
list.insertAtBack(7)
list.insertAtBack(3)
list.insertAtBack(6)
list.insertAtBack(2)
list.insertAtBack(5)
list.insertAtBack(1)

console.log(list.print())
console.log(list.length())
deleteAllNodesWithValue(list, 1);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
console.log(list.length())
// console.log(list.head.next)
// console.log(list)