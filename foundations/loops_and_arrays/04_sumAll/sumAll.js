function checkError(number){
    let notNumber = typeof(number) != "number";
    let notInteger = Math.floor(number) != number;
    let notPositive = number < 0;
    if(notNumber || notInteger || notPositive){
        return "ERROR"
    }
    else {
        return
    }    
}
   

const sumAll = function() {
    let arg0 = arguments[0];
    let arg1 = arguments[1];
    let validArg0 = checkError(arg0);
    let validArg1 = checkError(arg1);
    if (validArg0 == "ERROR" || validArg1 == "ERROR"){
        return "ERROR"
    }
    let mn;
    let mx;

    if (arg0 < arg1){
        mn = arg0;
        mx = arg1;
    }
    else if (arg0 > arg1){
        mn = arg1;
        mx = arg0;
    }
    else {
        mn = arg0;
        mx = arg0;
    }
    console.log(`min${mn}, max${mx}`);
    let initialValue = mn;
    let sum = initialValue;
    let currentValue = mn + 1;
    
    while (currentValue <= mx){
        sum = sum + currentValue;
        currentValue = currentValue + 1;
        console.log(`SUM: ${sum}, CURRENT_VALUE:${currentValue}`)

    }
    return sum;
}




// Do not edit below this line
module.exports = sumAll;
