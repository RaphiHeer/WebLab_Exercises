/* Teil 1 - Stack (Closures)*/
console.log("**** Stack Aufgabe (Closures) ****");
var myStack;
myStack = function () {
    var data = [];
    return {
        push: function (item) {
            data.push(item);
        },
        pop: function () {
            return data.pop();
        }
    }
}();

myStack.push(5);
myStack.push(4);
myStack.push(3);
myStack.push(2);
myStack.push(1);

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());