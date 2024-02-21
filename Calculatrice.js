let current = "";
const displayContent = document.getElementById("display-content");//displays the result
//all the numbers
const num0 = document.getElementById("0");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
//the signs
const equal = document.getElementById("");
const plus = document.getElementById("");
const minus = document.getElementById("");
const multiply = document.getElementById("");
const divide = document.getElementById("");

const numArray = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9];

for (const htmlElement of numArray) {
    htmlElement.addEventListener("click", ()=>{
        current+= `${htmlElement.id}`;
        display();
    })
}

function display(){
    console.log(current);
    displayContent.innerText = current;
}