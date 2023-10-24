let titleElement = document.getElementById("title");

function changeTitle(){
    titleElement.innerText = "wow javascript";
    titleElement.style.color = "red";
}

let clickMeBtn = document.getElementById("Click");

clickMeBtn.addEventListener("click", changeTitle);

//function changeText(){
    //buttonElement.innerText = "hi";
//}


const nameInput = document.getElementById("nameInput");

const greeting = document.getElementById("greeting");

function changeGreeting(){
    greeting.innerText = "Hello " + nameInput.value + "!";
}


nameInput.addEventListener("input", changeGreeting);

