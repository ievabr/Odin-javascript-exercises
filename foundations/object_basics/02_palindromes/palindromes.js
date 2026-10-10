const palindromes = function (string) {
    string = string.toLowerCase();
    
    let string4 = string.split(" ").join("").split(",").join("").split("!").join("").split("?").join("").split(".").join("");
    string4 = string4.split("").reverse();
    
    let string2 = string.split(" ").join("").split(",").join("").split("!").join("").split("?").join("").split(".").join("");
    string2 = string2.split("");
    let boolArr = [];
    for(let i = 0; i < string4.length - 1; i++){
        boolArr.push(string2[i] == string4[i]);
    }
    return(boolArr.includes(false) ? false : true)
    

    
    
};
palindromes("A car, a man, a maraca")

// Do not edit below this line
module.exports = palindromes;
