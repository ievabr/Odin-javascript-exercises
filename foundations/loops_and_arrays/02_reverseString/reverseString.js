const reverseString = function(string) {
    let lenString = string.length;
    let i = lenString - 1;
    let newString = "";
    while(i >= 0){
        newString = newString + string[i];
        i = i - 1;
    }
    return(newString);
};

// Do not edit below this line
module.exports = reverseString;
