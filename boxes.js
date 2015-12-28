//After the pages finishes loading step into the init function
window.onload=init;
//counter variable initialized to zero
var counter=0;
//boxes variable initialized with empty array
var boxes=[];
//Box constructor takes in id,name,color,x and y parameters 
//and assigns them to properties of same name
function Box(id,name,color,x,y) {
this.id=id;
this.name=name;
this.color=color;
this.x=x;
this.y=y;
}
//start of init function
function init() {
//get the button with the Id of generateButton, store it in variable of same name
var generateButton=document.getElementById("generateButton");
//when this button is clicked step into the generate function
generateButton.onclick=generate;
//get the button with the Id of clearButton
var clearButton=document.getElementById("clearButton");
//when this button is clicked step into the clear function
clearButton.onclick=clear;
}

//start of generate function
function generate() {
//get the text input with the Id of name and store it in name variable
var name=document.getElementById("name");
//get the value of the text input and store it in the variable nameValue
var nameValue=name.value;
//get the node array of color selectors from within the elements of the 
//form with id data and iterate through each index, if it is selected
//store the value in the variable colorValue
var color=document.forms.data.elements.color;
for (var k=0; k<color.length; k++) {
if (color[k].selected) {
var colorValue=color[k].value;
}
}

var howMany=document.forms.data.elements.amount;
//iterate through howMany node array, if its checked store the value converted to integer into
//the howManyValue variable
for (var j=0; j<howMany.length; j++) {
if (howMany[j].checked) {
var howManyValue=parseInt(howMany[j].value);
}
}
var sceneDiv = document.getElementById("scene");
//make sure the inputs are checked or filled in
if (nameValue==null||nameValue==""||howManyValue==null||howManyValue=="") {
var error="Please check your inputs: \n";
if (nameValue==null||nameValue=="") {
error+="Please enter a name. \n";
}
if (howManyValue==null||howManyValue=="") {
error+="Please select the number of boxes. \n";
}alert(error);
} else {   
//iterate through up to how much they selected
for (var i=0; i<howManyValue; i++) {
var x = Math.floor(Math.random() * (sceneDiv.offsetWidth-101));
var y = Math.floor(Math.random() * (sceneDiv.offsetHeight-101));
//create a new box object
var box= new Box(counter,nameValue,colorValue,x,y);
//create a new div element
var newDiv=document.createElement("div");
//set the class attribute of said div to box
newDiv.setAttribute("class","box"); 
//the id to the counter
newDiv.setAttribute("id",counter);
counter++;
//add new top and left style properties based off randomized numbers
newDiv.style.top=y +"px";
newDiv.style.left=x +"px";
//change the background color to the colorValue they selected which is stored in the object
newDiv.style.backgroundColor=colorValue;
//add the div as a child of its parent
sceneDiv.appendChild(newDiv);
//add the object to the array
boxes.push(box);
//create element to store the name
var heading=document.createElement("h5");
heading.innerHTML=nameValue;
newDiv.appendChild(heading);
//when you click on a div call the display function
newDiv.onclick=display;
}}
}

function clear() {
//make a node array of all elements with the class name box
var boxesClear=document.getElementsByClassName("box");
//iterate through length of collection
for (var i=0; i<boxesClear.length;) {
//go the parent node of the index in the collection and remove the child with the collection index
boxesClear[i].parentNode.removeChild(boxesClear[i]);
}
counter=0;
boxes.length=0;
}

function display() {
//get the id of the selected box object
var boxId=this.getAttribute("id");
//store the object properties of the box from the array at the id index 
var boxInfo="Id= "+boxId +"\n";
boxInfo+="Name= "+boxes[boxId].name+"\n";
boxInfo+="Color= "+boxes[boxId].color+"\n";
boxInfo+="Top= "+boxes[boxId].y+"px"+"\n";
boxInfo+="Left= "+boxes[boxId].x+"px"+"\n";
//call the variable in an alert box
alert(boxInfo);
}
