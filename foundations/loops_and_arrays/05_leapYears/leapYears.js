const leapYears = function(leapYear) {
    const x4 = 4;
    const x100 = 100;
    const x400 = x4 * x100;
    let result;
    if ((leapYear % x400) == 0){
        result = true;
    }
    else if ((leapYear % x100) == 0){
        result = false;
        }
    else if ((leapYear % x4) == 0){
        result = true;
    }
    else {
        result = false;
    }
    console.log(result, leapYear, leapYear % 4);
    return result;   
};

// Do not edit below this line
module.exports = leapYears;
