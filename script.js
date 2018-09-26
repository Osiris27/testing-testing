
var button = document.getElementById("Enter");
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputVaLe(){
	return input.value.length;
}
function inputwork(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li);
	input.value ="";
}

function addListAfterClick(){
	if(inputVaLe()>0){
	 console.log("CLICK!!!");		
	 inputwork();
	}
}
function addListAfterEnter(event){
	if(inputVaLe() > 0 && event.keyCode === 13){
		console.log("Enter!!!");
		inputwork();
	}
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);


/*
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress); */