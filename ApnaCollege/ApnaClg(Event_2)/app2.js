 let inp = document.querySelector("input");

 inp.addEventListener("keydown", function(event) {
     
    console.log("code = ",event.code);
    if(event.code == "ArrowUp") {
        console.log("character mmoves forward");
    }else if(event.code == "ArrowDown"){
        console.log("character moves backward");
    }else if(event.code == "ArrowLeft"){
        console.log("character moves left");
    }else if(event.code == "keyL"){
        console.log("character moves right");
    }
     
 })
  