const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numbers) {
  let sum = 0
  numbers.forEach(number => sum += number)
  return sum
};

const multiply = function(numbers) {
  let result = 1
  numbers.forEach(number => result *= number)
  return result
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(number) {
  if (number === 0) return 1
  result = 1
	for (let i = number; i > 0; i--){
    result *= i
  }
  return result
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
