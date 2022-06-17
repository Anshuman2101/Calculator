let display=document.getElementById("display");
let buttons=document.querySelectorAll("button");
let displayValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonValue=e.target.innerText;
        console.log('Button text is ', buttonValue);
        if(buttonValue == "X"){
            buttonValue="*";
            displayValue += buttonValue;
            display.value = displayValue;
        }
        else if(buttonValue == "C"){
            displayValue = "";
            display.value = displayValue;
        }
        else if(buttonValue == "="){
            display.value = eval(displayValue);
        }
        else{
            displayValue += buttonValue;
            display.value = displayValue;
        } 
    })
}
