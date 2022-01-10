const addTwo = (input, adds2) => adds2(input);
const adder = num => num + 2;

console.log(addTwo(9, adder));