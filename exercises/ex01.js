// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners - slow and fast
// (The slow runner moves one node at a time, the fast runner moves two nodes at a time. When the fast runner is at the very last node, then the slow runner will eventually be in the middle of the list. You can then return its value)

const SLL = require('../lib/SLL');

function findMiddle(list) {
  let runner = list.head
  let slowRunner = list.head

  while(runner !== null) {
    console.log(`Fast runner: ${runner.data}` )
    console.log(`Slow runner: ${slowRunner.data}`)
    if (runner.next !== null && runner.next.next !== null) {
      runner = runner.next.next
      slowRunner = slowRunner.next
    } else {
      return `Middle data is ${slowRunner.data}`
    }
  }

  return slowRunner.data
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

// console.log(list)
// console.log(list.head)
// console.log(list.head.data)
// console.log(list.head.next)
// console.log(list.head.data.next)
// console.log(list.head.next.data)
// console.log(list.head.next.next.data)
// console.log(list.head.next.next.next.data)
// console.log(list.head.next.next.next.next.data)
// console.log(list.head.next.next.next.next.next.data)
console.log(findMiddle(list)); // Output: 3
// findMiddle(list)

//---------------------------------------note----------------------------------------------
// class Node {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// const person1 = new Node("John")
// const person2 = new Node("Jane")
// const person3 = new Node("Joe")
// const person4 = new Node("Jack")


// person3.next = person1 // Joe -> John
// person1.next = person4 // John -> Jack
// person4.next = person2 // Jack -> Jane

// function traverseList(node) {
//   let runner = node // Runner starts at person3
//   let steps = 0 // flag counter

//   while(runner !== null) {
//     if (runner.data === "Jack") {
//       console.log(`Runner found Jack after ${steps} steps!`)
//       runner = null // while loop ends
//     } else {
//       runner = runner.next
//     }
//     steps++
//   }
// }
//                                  // R
// // Target: Joe -> John -> Jack -> Jane
// traverseList(person3)


// const num10 = new Node(10)
// const num20 = new Node(20)
// const num30 = new Node(30)
// const num40 = new Node(40)
// const num50 = new Node(50)
// const num60 = new Node(60)

// // Connetions
// num10.next = num20
// num20.next = num30
// num30.next = num40
// num40.next = num50
// num50.next = num60

// // Current list: 10 -> 20 -> 30 -> 40 -> 50 -> 60
// // count: 3

// function divisibleTwenty(head) {
//   let runner = head
//   let count = 0
  
//   while(runner !== null) {
//     if (runner.data % 20 === 0) {
//       count++
//     }
//     runner = runner.next
//   }

//   return count
// }

// console.log(divisibleTwenty(num10))

// const apple = new Node("apple")
// const banana = new Node("banana")
// const mango = new Node("mango")
// const orange = new Node("orange")
// const melon = new Node("melon")
// const papaya = new Node("papaya")

// apple.next = banana
// banana.next = mango
// mango.next = orange
// orange.next = melon
// melon.next = papaya
// //             🏃🏻‍♀️
// // Current: apple -> banana -> mango -> orange -> melon -> papaya
// function jumpTwoSteps(head) {
//   let runner = head // apple

//   while (runner !== null) {
//     console.log(runner.data)
//     runner = runner.next.next
//   }
// }

// jumpTwoSteps(apple)