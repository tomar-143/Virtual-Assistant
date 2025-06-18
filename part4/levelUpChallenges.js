// 1. write for loop (store all tea before Chai)

let teas = ["green tea", "black tea", "chai","oolong tea"];
let selectedTeas = [];

for(let i=0; i< teas.length; i++){
    if(teas[i] === "chai"){
        break;
    }
    selectedTeas.push(teas[i]);

}
// console.log(selectedTeas);

// 2. for loop skips "paris" & store other cities

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let i=0; i<cities.length;i++){
    if(cities[i]=== "Paris"){
        continue;

    }
    visitedCities.push(cities[i]);
}
// console.log(visitedCities);

// 3. for loop for number is found

let numbers = [1,2,3,4,5];
let smallNumbers = [];

for(const num of numbers){
    if(num === 4){
        break;

    }
    smallNumbers.push(num);
}
// console.log(smallNumbers);  


//4. for loop for store other teas in array

let teaTypes = ["chai", "green tea","herbal tea","black tea"];
let preferredTeas = [];

for(const tea of teaTypes){
    if(tea === "hherbal tea"){
        continue;
    }
    preferredTeas.push(tea);
}

//5. for loop containing city population

let citiesPopulation = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
}

let cityNewPopulations = {};
// console.log(Object.values(citiesPopulation));

for(const city in citiesPopulation){
    //key value
    cityNewPopulations[city] = citiesPopulation[city];
}
    // console.log(cityNewPopulations);



// 6. skip any city with a population (using for loop)

let worldCities = {
    Sydnney : 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000
};
let largeCities = {};

for(const city in worldCities){
    if(worldCities[city] < 30000000){
        continue;
    }
    largeCities[city] = worldCities[key];
}

// 7. stop the loop when "chai" is found
let teaCollection = ["earl grey", "green tea","chai","oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea){
    if(tea === "chai"){
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);

// 8. skip "Sydney" and store other cities

let myWorldCities = ["Berlin", "Tokyo","Sydney","Paris"];
let traveledCities = [];

myWorldCities.forEach((city) => {
    if(city === "Sydney"){
        return;
    }
traveledCities.push(city);
});
// console.log(traveledCities);

//9. skip value 7 & rest multiply by 2
let  mynumbers = [2,5,7,9];
let doubledNumbers = [];

for(let i =0;i<mynumbers.length;i++){
    if(numbers[i] === 7){
        continue;
    }
    doubledNumbers.push(numbers[i] * 2);
}

// 10. stop when length of current tea is greater than 10
let myTeas =["chai", "green tea","herbal tea","black tea","jasmine tea"];
let shortTeas=[];

for(const tea of myTeas){
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}