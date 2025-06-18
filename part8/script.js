// example1

document.getElementById("changeTextButton").addEventListener('click', function() {
    let paragraph =this.document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed"
});

//example2
document.getElementById("highlightFirstCity").
addEventListener('click', function() {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

//Example 3: 
document.getElementById("changeOrder").addEventListener(
    "click", function(){
        let coffeetype = document.getElementById("coffeeType");
        coffeetype.textContent = "Expresso";
        coffeetype.style.backgroundColor = "brown";
        coffeetype.style.padding = "5px";
    });

    //example 4
    document.getElementById("addNewItem").addEventListener(
        'click', function(){

            let newItem = document.createElement('li');
            newItem.textContent = "Eggs";

            document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5
document.getElementById("removeLastTask").addEventListener(
    "click", function() {
        let taskList = document.getElementById("taskList");
        taskList.lastElementChild.remove();
    });

    //example 6

    document.getElementById("clickMeButton").addEventListener("dblclick", function() {
        alert("chaicode");
    }); 

    //example 7

    document.getElementById("teaList").addEventListener('click', function(event) {
        console.log(event);
        if(event.target && event.target.matches(".teaItem")){
            alert("You selected : " + event.target.textContent);
        }
    });

    //example 8
    document.getElementById("feedbackForm").addEventListener('submit', function(event){
        event.preventDefault();
        let feedback = document.getElementById("feedbackInput").value;
        console.log(feedback); 
        document.getElementById("feedbackDisplay").textContent = `Feedback is: ${fe}`
    });

    //example 9
    document.addEventListener("DOMContentLoaded", function()
    {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example 10
document.getElementById("toggleHighlight").addEventListener('click', function() {
    let descriptionText = document.getElementById(descriptionText);
    descriptionText.classList.add("highlight");
});