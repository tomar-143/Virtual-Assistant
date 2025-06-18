// while loop

let sum=0;
let i=1;
while(i<=5){
    sum += i;
    i++;
}
// console.log(sum);

// 2. while loop count down from 5 to 1
let  countdown = [];
let j = 5;
while(j > 0){
    countdown.push(j);
    j--;
}
// console.log(countdown);

// 3. "do while" loop 
/*
let teaCollection = [];
let tea ;

do{
    // tea = prompt('Enter your favourite tea(type "stop" to finish)');

    if(tea === "stop"){
        teaCollection.push(tea);
    }
}while(tea !== "stop");
   
*/
// 4. write a 'do while loop'
let total = 0;
let k= 1;
do{
total += k;
k++;
}while(k <= 3);

// 5. for loop for multiply each element in array[2,4,6]

let multipliedNumbers =[];
let numbers = [2,4,6];

for(let l=0; l< numbers.length; l++){
  /*  takeNumber = numbers[l] * 2;
    multipliedNumbers.push(takeNumber);
         */
        // OR
    multipliedNumbers.push(numbers[l] * 2);    
}
// console.log(multipliedNumbers);


// 6. write 'for ' loop lists all cities
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for(let c = 0; c < cities.length; c++){
    const myCity = cities[c];
    cityList.push(myCity);
}
console.log(cityList);