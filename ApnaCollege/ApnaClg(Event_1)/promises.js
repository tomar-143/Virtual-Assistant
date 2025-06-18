function savetoDb(data){
    return new promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

  savetoDb("apna college");  //request promise object
   .then(() => {
    console.log("promise was resolved");
   })
   .catch(() => {
    console.log("promise was rejected");
  
   })