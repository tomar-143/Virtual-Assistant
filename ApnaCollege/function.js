 /*
 function avg(a,b,c){
  console.log((a+b+c)/3)
 }

 avg(1,2,4)
 avg(2,3,3)
 avg(4,5,6)

 */

 /*
 function mul(n){
  for(let i=n;i<=n*10;i=i+n){
    console.log(i)
  }
 }

 mul(5)
//  mul(7)
  */
/*
function sum(a,b){
  return a+b;
}

console.log(sum(4,5))
*/
/*
function sumOfN(n){
  let sum=0;

  for(let i=0;i<=n;i++){
    sum=sum+i;
  }
  return sum;
}
  */


/*
let str= ["hi","hello","bye","!"];

function concat(str){
  let result;

  for(let i=0;i<str.length;i++){
    result = result+str[i];
  }

  return result;
}
  */
/*
//higher order function
function multipleGreet(func, count){
  for(let i=1;i<=count;i++){
    func();
  }
}

let greet = function(){
  console.log("hello");
}

multipleGreet(greet, 10);
*/

//Try and catch
/*
console.log("hello");
console.log("hello");

try{
  console.log(a);
} catch(err){
  console.log("caught an error.. a is not defined")
  console.log(err)
}

console.log("hello");
console.log("hello");
console.log("hello");
*/

//Arrow function
/*
const sum = (a,b) => {
  console.log(a+b);
};
 const pow = (a,b) => {
  return a ** b;
 };

 const hello =() => {
  console.log("hello world");
 };

 const mul = (a,b) => a*b;

 const cube = (n) => (n*n*n); 
 */

 //Set time out function
 /*
 console.group("hi there");

 setTimeout( () => {
  console.log("Apna college");
 }, 10000);                    // PRINT "Apna College exactly after 10 seconds"

 console.log("Welcome to");
 */

 // Set Interval (Execute same function multiple times after the interval)
 /*
 console.log("hi there");
 setInterval( () => {
  console.log("Apna college");
 }, 2000);                     //PRINT after every 2 seconds
*/

//this with Arrow function
/*
const student = {
  name: "aman",
  marks: 95,
  prop: this,   // global scope
  getName: function() {
    console.log(this);
    return this.name;
  },

  getMarks: () => {
    console.log(this); //parent's scope
    return this.marks;
  }, 
};
*/

// forEach function
/*
let arr = [1,2,3,4,5];

arr.forEach(function (el) {
  console.log(el);
});
*/
/*
let students =[
  {
    name: "aman",
    marks: 95,
  },
  {

    name: "shradha",
    marks: 94.4,
  },
  {
    name:"rajat",
    marks:92,
  },
];

let gpa = students.map((el) => {
  return el.marks /10;
});

//arr.forEach((student) => {
//  console.log(student.marks);
//});

//filter function
let nums = [1,2,3,4,7,8,2,9,10,12,11];
let ans= nums.filter((el) => {
  return el % 2 == 0;  //even -> true , odd -> false
});
*/

//for find maximum value
/*
let arr= [1,4,2,5,6,7,2,9,2];
let max = -1;

for(let i=0; i<arr.length;i++){
  if(max < arr[i]){
    max = arr[i];
  }
}
console.log(max);
*/
//or
/*
let arr = [1,4,2,5,6,7,2,9,2];
let max = arr.reduce((max, el) => {
  if(max < el){
    return el;
  }else{
    return max;
  }
});

console.log(max);
*/

//use of every
/*
let nums = [10,20,30,60];

let ans = nums.every((el) => el % 10 == 0);
console.log(ans);
*/

//destructuring of objects
/*
const student = {
  name : "karan",
  age: 15,
  class: 9,
  subjects: ["hindi","english","math","science"],
  username: "karan123",
  password: "abcd",
};

let {username: user, password: secret, city="Mumbai" } = student;
 */

//EventListener

let btns = document.querySelectorAll("button");

for(btn of btns){
  btn.addEventListener("click", sayHello);
  btn.addEventListener("click", sayName);
}

function sayHello(){

  alert("Hello");
}

function sayName(){
  alert("Apna College");
}