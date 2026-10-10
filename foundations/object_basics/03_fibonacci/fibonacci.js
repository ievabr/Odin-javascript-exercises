const fibonacci = function(number) {
    let n1 = 1;
    let n2 = 1;
    let nextItem;
    if(number == 1 || number == 2){
        return 1;
    }
    if(number <= 0 || isNaN(number) || typeof number != "number"){
        return "OOPS"
    }
    for(let i = 3; i <= number; i++){
        nextItem = n1 + n2;
        n1 = n2;
        n2 = nextItem;       
        
    }
    return nextItem
};

// Do not edit below this line
module.exports = fibonacci;
