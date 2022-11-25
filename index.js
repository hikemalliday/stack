
///FIX POINTERS
//Make method that prints stack

class Node 
{
    constructor(data, pointer = null)
    {
        this.data = data;
        this.pointer = pointer;
    }
}

class Stack 
{
    constructor()
    {
        this.pointer;
        this.top;
        this.count = 0;
    }

    pushData(node)
    {
        if (this.count == 0)
        {
            this.top = node;
            this.pointer = null;
            node.pointer = null;
            this.count++;
            return;
        }
        node.pointer = this.top;
        this.pointer = this.top;
        this.top = node;
        this.count++;
        
    }

    popData()
    {
        let current = this.top;
        
        //remove the top nodes pointer:
        current.pointer = null;

        //change top to next node down the stack:
        this.top = this.pointer;
        
        //Change global pointer
        this.pointer = this.top.pointer;
        
        //Retract the count
        this.count--;
    }

    popDataUntil(stackNumber)
    {
        
        while (stackNumber !== this.count)
        {
            let current = this.top;
            
            //remove the top nodes pointer:
            current.pointer = null;
        
            //change top to next node down the stack:
            this.top = this.pointer;
            
            //Change global pointer
            this.pointer = this.top.pointer;
            
            //Retract the count
            this.count--;
        }

    }

    pushArrayToStack(array)
    {
        for (let i = 0; i < array.length; i++)
        {
            let node = new Node(array[i]);
            this.pushData(node);
        }
    }

    printStackBottomToTop()
    {
        let endCount = this.count;
        let top = this.top;
        let pointer = this.pointer;
        let startCount = 1;
        
        while (endCount !== 0)
        {
            while (endCount !== startCount)
                {
                    top = pointer;
                    pointer = top.pointer;
                    startCount++;
                }
                //Print bottom node
                console.log(top)
                
                //Reset top and pointer
                top = this.top;
                pointer = this.pointer;

                startCount = 0
                endCount--;
                
} 
                
            
        
    }

}
 
//TO-DO List:

class ToDoItem
{
    constructor(data, prio, description = 'test', next = null)
    {
        this.data = data;
        this.priorityLevel = prio;
        this.description = description;
        this.next = next;
    }

}

class ToDoList
{
    constructor (head, next = null)
    {
        this.head = null;
        this.size = 0;
        this.next = null;
        
    }

    addItemToList(data, prio, description)
    {
        this.head = new ToDoItem (data, prio, description, this.head);
        this.date = new Date();
        this.size++;
        
    }
    
    printListData()
    {
        let current = this.head;

        while(current)
        {
        console.log(current.data);
        current = current.next;
        }
    }
   
    clearList()
    {
        this.head = null;
        this.size = 0;
    }
}


let stack = new Stack();
let node1 = new Node("Hi there, i'm Node1!");
let node2 = new Node("Hi there, i'm Node2!");
let node3 = new Node("Hi there, i'm Node3!");
let node4 = new Node("Hi there, i'm Node4!");
let node5 = new Node("Hi there, i'm Node5!");
let node6 = new Node("Hi there, i'm Node6!");
let node7 = new Node("Hi there, i'm Node7!");

let array1 = ['This', 'Is', 'Just', 'A', 'Test'];

let linkedList = new ToDoList()

let linkedListHead = linkedList.addItemToList("wake up", 1)
linkedList.addItemToList("gym", 2)
linkedList.addItemToList("walk", 3)
linkedList.addItemToList("nap", 2)
linkedList.addItemToList("sleep", 3)

let linkedListNode = new Node();
linkedListNode.data = linkedListHead;


stack.pushData(linkedListNode);

console.log(linkedListNode.data)
























