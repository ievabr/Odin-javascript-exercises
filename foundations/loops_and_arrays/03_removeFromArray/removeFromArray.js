

const removeFromArray = function() {        
    
    const len_param = arguments.length;
    let arr = arguments[0];

    for(let i = 1; i < len_param; i++){
        valueToRemove = arguments[i];

        arr = arr.filter(val => val !== valueToRemove);
        console.log(`i:${i}, n:${len_param}, arr:${arr}`);
        arr_length = arr.length;
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
