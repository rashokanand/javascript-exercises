const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, el) => sum + el, 0);
};

const multiply = function(arr) {
  return arr.reduce((p,el) => p * el, 1);
};

const power = function(num,exp) {
	return num ** exp;
};

const factorial = function(n) {
  let product = 1;
	for (i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
