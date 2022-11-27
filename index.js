//Stack:

class StackNode 
{
    constructor (data, pointDown = null, next = null)
    {
        this.data = data;
        this.pointDown = pointDown;
        this.next = next;
    }
}

class Stack 
{
    constructor ()
    {
        this.top;
        this.count = 0;
    }

    pushNodeOntoStack(node)
    {
        if (this.top !== null)
        {
            node.pointDown = this.top;
        }
        
        this.top = node;
        this.count++;
    }

    pushArrayOntoStack(array)
    {
        //Iterate over an array, and pop it onto stack:
        for (let i = 0; i < array.length; i++)
        {
            let tempNode;
            //convert the array elements into Nodes:
            tempNode = new StackNode(array[i])
            this.pushNodeOntoStack(tempNode)
        }
    }
   
    popNodeOffStack()
    {
        
        this.top = this.top.pointDown;
        this.count--;
    }

    popNodeUntil(counter)
    {
        //Pop off nodes until condition:
        while (this.count !== counter)
        {
            this.top = this.top.pointDown;
            this.count--;
        }
    }
}

//Linked List:

class ListNode 
{
    constructor(data, next = null, previous = null)
    {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addNodeToList(node)
    {
        if (this.head == null)
        {
            this.head = node;
        }
        if (this.count >= 1)
        {
        //Set 'next' for the previous node:
        this.tail.next = node;
        }
         //Set 'previous' for the new node:
        node.previous = this.tail;
        //Set the new 'tail'
        this.tail = node;
        this.count++;
    }

    addArrayToList(array)//This method adds an array to the list by converting the elements into Nodes:
    {
        for (let i = 0; i < array.length; i++)
        {
            let element = new ListNode(array[i]);
            this.addNodeToList(element);
        }
    }

    removeNode()//This method will remove the end node, or 'tail':
    {
        let prevNode = this.tail.previous;
        //Remove the final node, or 'tail' by altering the second to last Node:
        prevNode.next = null;
        //Update 'this.tail' to the second to last Node:
        this.tail = this.tail.previous;
        this.count--;
    }

    removeChainAt(counter)//This method will count up from the head, and 'chop' off the chain.
    {
        let startCount = 1;
        let current = this.head;

        while (startCount !== counter)//Count up from the head:
        {
            current = current.next;
            startCount++;
        }
         //Once we hit the stopping point, 'chop' off the rest of the chain:
        current.next = null;
        //Update 'this.count':
        this.count = counter;
        //Update 'this.tail':
        this.tail = current;
    }

    printHead()
    {
      if(this.head != null)
      {
        console.log('Head: ' + this.head.data);  // prints something like 'Head: Node1'
        if(this.head.next != null)
        {    
          console.log('Next: ' + this.head.next.data); // 'Next: Node2;
        }
        if(this.head.prev != null)
        {    
          console.log('Prev: ' + this.head.prev.data); //this shouldn't ever execute cause prev should be null on head but helpful to see what its pointing to if it is pointing ot something
        } 
        else
        {
        console.log("Prev: Null");
        }
      }
      else
      {
        console.log("Head: Null");
      }
    }

    printTail()
    {
        if(this.tail != null)
        {
            console.log('Tail: ' + this.tail.data); // prints something like "Tail: Node1"
            if(this.tail.next != null)
        {    
          console.log('Next: ' + this.tail.next.data); //this shouldn't ever execute cause prev should be null on head but helpful to see what its pointing to if it is pointing ot something
        }
        if(this.tail.prev != null)
        {    
          console.log('Prev: ' + this.tail.prev.data); // prints something like "Prev: Node1"
        } 
        else
        {
        console.log("Prev: Null");
        }
        }
        else 
        {
            console.log("Tail: Null");
        }
    }
}

//Linked List:

let linkedList = new LinkedList;

let linkedListArray = ['This', 'Is', 'Just', 'A', 'Test'];

let listNode1 = new ListNode('listNode1');
let listNode2 = new ListNode('listNode2');
let listNode3 = new ListNode('listNode3');
let listNode4 = new ListNode('listNode4');
let listNode5 = new ListNode('listNode5');

linkedList.addNodeToList(listNode1);
linkedList.addNodeToList(listNode2);
linkedList.addNodeToList(listNode3);
linkedList.addNodeToList(listNode4);
linkedList.addNodeToList(listNode5);

linkedList.addArrayToList(linkedListArray);

//Stack:

let stack = new Stack;

let stackArray = ['This', 'Is', 'Just', 'A', 'Test'];

let stackNode1 = new StackNode('Stack Node 1');
let stackNode2 = new StackNode('Stack Node 2');
let stackNode3 = new StackNode('Stack Node 3');
let stackNode4 = new StackNode('Stack Node 4');
let stackNode5 = new StackNode('Stack Node 5');

stack.pushNodeOntoStack(stackNode1);
stack.pushNodeOntoStack(stackNode2);
stack.pushNodeOntoStack(stackNode3);
stack.pushNodeOntoStack(stackNode4);
stack.pushNodeOntoStack(stackNode5);




























