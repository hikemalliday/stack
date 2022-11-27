
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

    showHead()
    {
        console.log('Data: ' + this.head.data)
        console.log('Next: ' + this.head.next)
        console.log('Previous: ' + this.head.previous)
    }
}

let linkedList = new LinkedList;

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


linkedList.showHead();
























