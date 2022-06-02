document.getElementById("calculate").addEventListener("click",function(){
    getValues();
    convertToDollar();
    convertToCurrency();
    console.log(inputValue, dollarValue, outputValue)
    document.getElementById("outputValue").innerHTML = outputValue 
});

function getValues(){
inputValue = parseInt(document.getElementById("inputValue").value)
inputCurrency = parseInt(document.getElementById("inputCurrency").value);
outputCurrency = parseInt(document.getElementById("outputCurrency").value);
}

function convertToDollar(){

    switch (inputCurrency) {
        case 0:
            //EUR
            dollarValue = inputValue * 1.07
            break;
        case 1:
            //YEN
            dollarValue = inputValue * 0.0077
            break;
        case 2:
            //POUND
            dollarValue = inputValue * 1.26
            break;
        case 3:
            //DOLLAR
            dollarValue = inputValue
    }
}
function convertToCurrency(){

    switch (outputCurrency) {
        case 0:
            outputValue = dollarValue * 0.93
            break;
        case 1:
            outputValue = dollarValue * 129.85
            break;
        case 2:
            outputValue = dollarValue * 0.79
            break;
        case 3:
            outputValue = dollarValue
    }
}
