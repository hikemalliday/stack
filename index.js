
///FIX POINTERS
//Make method that prints stack
//Pop until you drop at 'x'
//Method that takes in an array of numbers
//However many numbers that is, it pushes them all in the array order


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

stack.pushArrayToStack(array1);



console.log(stack);






