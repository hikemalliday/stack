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
};

let stack = new Stack();
let node1 = new Node("Hi there, i'm Node1!");
let node2 = new Node("Hi there, i'm Node2!");
let node3 = new Node("Hi there, i'm Node3!");
let node4 = new Node("Hi there, i'm Node4!");

stack.pushData(node1);
stack.pushData(node2);
stack.pushData(node3);
stack.pushData(node4);
stack.popData();



console.log(stack);






