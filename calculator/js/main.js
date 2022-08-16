
let screen = document.querySelector('.screen');
let clear = document.querySelector('.clear');
let buttons = document.querySelectorAll('.keys button');
let mathOperation =document.querySelectorAll('.math-operation')
let equal = document.querySelector('.result');
let expression


function stopOperation(){
    let counter=0;
    mathOperation.forEach(operation => operation.addEventListener( "click" , () => { 
        counter+=1 ;
         if (counter>=1)
         { return operation.disabled = true}}))
   }

function getExpression(){ 
    stopOperation()
    buttons.forEach(button => button.addEventListener( "click" , () => screen.textContent += button.value))
    expression = screen.textContent;
    return  expression
}

getExpression()


equal.addEventListener( "click" , () => screen.textContent = eval(getExpression()));
clear.addEventListener( "click" , () => window.location.reload())

      
