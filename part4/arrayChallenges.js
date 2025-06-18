/*
1. declare an array named 'teaFlavors' that contain
the strings "green tea", "black tea", and "oolong tea".

Access the first element of the array and store in a variable
named 'firsttea'
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];

/*
2. Declare an array named 'cities' containing
"London", "Tokyo", "Paris", and "New York".
    Access the third element in the array and store
    in a variable named 'favoritecity'.
    */

    let cities = ["London", "Tokyo", "Paris", "New York"];
    const favoriteCity = cities[7];

    /*
    3. you have an array named 'teaType' containing
    "herbal tea", "white tea ", and "masala chai".
    Change the second elemnt of the array to "jasmmin tea".
    */
    let teaType = ["herbel tea", "white tea", "masala chai"];


    /*
    4. Declare an array named 'citiesVisited' containing 
    "Mumbai" and "sydney" .
      Add "Berlin" to the array the 'push' method
      */

      let citiesVisited = ["Mumbai","sydney"];
      citiesVisited[2]= "Berlin";
      citiesVisited.push("Noida");;
    //   console.log(citiesVisited);
      //console.log(citiesVisited.length);

      /*
      5. You hve an array named 'popularTeas' containing "green tea", "oolong tea", and "chai".
      Create a soft copy of this array named 
      'softCopyTeas'.
      */
     let teaOrders = ["chai", "iced tea", "matcha","earl grey"];
    // teaOrders.pop();
    
    const lastOrder = teaOrders.pop();
    //  console.log(teaOrders);
    //  console.log(lastOrder);

     /*
     6. You have an array named 'popularTeas' containing "green tea", "oolong tea", and "chai".
     Create a soft copy of this array named 
     'softCopyTeas'.
     */
     let popularTeas = ["green tea","oolong tea","chai"];
     /* let var1 = 5;
     let  var2 = var1;
     var1 = 9;
     console.log(var2);   */

     let softCopyTeas = popularTeas;
     popularTeas.pop();
    //  console.log(softCopyTeas);
    //  console.log(popularTeas);

 /*    7. You have an array named 'topCities' containing
      "Berlin", "singapore", and "New york".
      Create a hard copy of the array named 
      'hardCopyCities'.
      */
     let topCities = ["Berlin", "Singapore","New York"];
     let hardCopyCities = [...topCities];
    //  let hardCopyCities = topCities.slice();

     topCities.pop();
    //  console.log(hardCopyCities);

 /*
 8. You have two array : 'europeanCities' containing
 "paris"and "Rome", and asianCities' conatining
 "Tokyo" and "Bangkok".
 Merge these two arrays into a new array named
 'worldCities'.
 */    

 let europeanCities = ["paris","rome"];
 let asianCities = ["Tokyo", "Bangkok"];
 let worldCities = [europeanCities, asianCities];
//  let worldCities = europeanCities + asianCities;

[]
 // console.log(typeof worldCities);
//  console.log(worldCities);

 /*
 9. You have an array named 'teaMenu' containing 
 "masala chai", "oolong tea", "green tea", and 
 "earl grey".
 Find the length of the array and store it in a 
 variable named 'menulength'
*/
let teaMenu = ["Masala chai", "oolong tea", "green tea",
    "earl grey "];

    let menuLength = teaMenu.length;

/*
10. You have an array named 'cityBucketList' containing
"kyoto", "London", "Cape Town", and
"VanCouver".
Check if "London" is in the array and store the 
result in a variable named 'isLondonInList'.
*/

let cityBucketList = ["kyoto","London","Cape toown",
    "Vancouver"];
let isLondonInList =cityBucketList.includes("Noida");
console.log(isLondonInList);