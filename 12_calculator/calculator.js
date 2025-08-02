const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, number) => (sum + number), 0);
};

const multiply = function(array) {
	return array.reduce((product, number) => (product * number), 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let product = 1;
  while (a > 0) {
    product *= a;
    a--;
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
