var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button= document.getElementById("remove")

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

var myNode = document.getElementsTagName("li");
while(myNode.hasChildNodes())
{
   myNode.removeChild(myNode.lastChild);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
