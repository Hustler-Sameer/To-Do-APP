const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list container");

function addTask(){
    if(inputBox.value == ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // here we are storing our input which we have entered in input field of our box
        //now we need to display those hence we have create a class of list-container which we have further used
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    //now we need to clear input filed 
    inputBox.value = ' ';
    saveData();
}
listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

// Now to store task in our app even after we refresh

function saveData(){
    localStorage.setItem("data" ,  listContainer.innerHTML) // this will enable us to store data;
}

// Now we need to display this stored data whenever we refresh our browser hence
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();