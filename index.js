

class Stack 
{
    constructor()
    {
        this.count = 0;
        this.array = [];
    }

    pushData(data)
    {
        this.array[this.count] = data;
        this.count++
    }

    popData()
    {
        let placeholderArray = [];
        for(let i = 0; i < this.array.length - 1; i++)
        {
            console.log(this.array)
            placeholderArray[i] = this.array[i]

        }
        this.array = placeholderArray;
    }
}

let testStack = new Stack;

testStack.pushData('test');
testStack.pushData('that');
testStack.pushData('funky');
testStack.pushData('stuff');
testStack.pushData('boy');

testStack.popData();

console.log(testStack.array);

