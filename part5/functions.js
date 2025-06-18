 //1. Return a string & store the result in a variable

 function makeTea(typeOfTea){
    return  `Making ${typeOfTea}`;
     
 }
 let greet = makeTea("lemon tea");
//   console.log(greet);

/*
2. create a function name "orderTea" that takes one parameter, 
'teaType' Inside this function, Create another function
'confirmOrder' that returns a message like 
"Order confirmed for chai".
*/
function orderTea(teaType) {

    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/*
3.Write an arrow function named 'calculateTotal' that
takes two parameters: "price" and "quantity".
function return the total cost
*/
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499 * 100);

/*
*/
function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}
// let order = processTeaOrder(makeTea);
// console.log(order);

/*
4. Write a function name "processTeaOrder" that taken
another function , "makedTea", as a parameter and calls 
with the argument "earl grey".
Return the result of calling "makeTea".
*/

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;

}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}

let order = processTeaOrder(makeTea);
// console.log(order);

/*
5. write a function name "createTeaMaker" that return 
another function . the return function should take
parameter, 'teaType', and return a message like "make green tea".

store the returned function in a variable named 
'teamaker' and call it with "green tea".
*/
function createTeaMaker(name){
    let score=100;
    return function(teaType){
        return `Making ${teaType} ${name} ${score}`;
    };
}

let teaMaker = createTeaMaker("Manish");
let result = teaMaker("green Tea");
console.log(result);
// console.log(teaMaker("green Tea"));

