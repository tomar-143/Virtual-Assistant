 
 h1 = document.querySelector("h1");
 
 function changeColor(color, delay){
   return new Promise((resolve,reject) => {
    setTimeout(() => {
    let num = Math.floor(Math.random() * 5) + 1;
    if(num > 3){
        reject("promise rejected");
    }
    h1.style.color = color;
    console.log(`color changed to ${color}!`);
    resolve("color changed");
    },delay);
});
 }

 async function demo() {
    try{
   await changeColor("red",1000);
   await changeColor("pink",1000);
   await changeColor("green",1000);
   await changeColor("orange",1000);   //try and Catch handle the error
   await changeColor("blue",1000)
 } catch(err) {
    console.log("error caught");
    console.log(err);
 }

 let a=5;
 console.log(a);
 console.log("new number= ", a+ 3);
 }


 /* Use Await function for this--

 changeColor("red",1000)
 .then(() => {
    console.log("red color was completed");
    return changeColor("orange",1000)
 })
 .then(() =>{
    console.log("orange color was completed");
    return changeColor("green",1000)
 })
.then(() => {
    console.log("green color was completed");
        return changeColor("blue",1000);
})
.then(() => {
    console.log("blue color was completed");

})
    */

 // 
//  changeColor("red", 1000, () => {
 // changeColor("orange", 1000 , () => {
//     changeColor("green", 1000, () => {      // this all concepts are callback hell
//         changeColor("yellow", 1000, () =>{
//            changeColor("blue", 1000);
//         });
//     });
//  });
// });
  

 

 //PROMISES
 // function savetoDB(data, success, failure){
 //    let internetSpeed = Math.floor(Math.random() * 10) +1;
 //    if(internetSpeed > 4){
//         success();
 //    }else{
 //        failure();
 //    }
 // }

 // savetoDB(
 //    "manish tomar",
 //    () => {
 //        console.log("success: your data was saved");
 //        savetoDB(
 //            "hello woorld",
 //            () => {
 //                console.log("success2: data2 saved");
 //                savetoDB(
 //                    "rahul",
 //                    () => {
 //                        console.log("success3: data3 saved");
 //                    },
 //                    () => {
 //                        console.log("failure3: weak connection");
 //                    }
 //                );
 //            },
 //            () => {
 //                console.log("failure2: weak connection");
 //            }  
 //        );
 // 
 //    },
 //    () => {
 //      console.log("failure: your data was not saved: ");
 //    }
// 
//  );
 
/*
function savetoDB(data){
    return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) +1;
   if(internetSpeed > 4){
       resolve("success: data was saved");
   }else{
       reject("failure: weak connection");
   }
});
}
  
//Using Then & catch & Using promise chaining
savetoDB("apna college")
.then((result) =>{
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDB("helloworld"); 
     
})
.then((result) =>{
        console.log("data2 saved");
        console.log("result of promise: ",result);
        return savetoDB("manish");
    })
.then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ",result);
})
.catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
});
 
*/


//Async function
/*
async function greet(){
    throw "404 page not found";
    return "hello";
}

greet()
.then((result) => {
    console.log("promise was resolved");
    console.log("result was : ", result);
})
.catch((err) => {
   console.log("promise was rejected with err : ", err);
});

let demo = async() => {
    return 5;
};

*/

// Await function 
/*
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },2000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();

}
*/

