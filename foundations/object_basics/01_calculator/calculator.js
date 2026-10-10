const add = function(a, b) {
	return(a + b);
};

const subtract = function(a,b) {
	return(a-b)
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
  }, 1)
};

const power = function(base, exponent) {
	const arr = Array(exponent).fill(base);
  return arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue
  })
};

const factorial = function(number) {
	let arr = [];
  if(number == 0){
    return 1;
  } else {
      for(let i=1;i<=number;i++){
        arr.push(i);
      }
      return arr.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
      }, 1);
    };
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
