//let num1 = document.getElementById("num1");
//let num2 = document.getElementById("num2");
function add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = "The result is " + result;
}
function subtract(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    let result = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerHTML = "The result is " + result;
}
function multiply(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    let result = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerHTML = "The result is " + result;
}
function divide(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    let result = parseFloat(num1) / parseFloat(num2);
    document.getElementById("result").innerHTML = "The result is " + result;
}
