// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.


const map = ( array, callback ) => {

    const output = [];

    // array.forEach( e => output.push(multiplyBy2(e)) );

    for (let i = 0; i < array.length; i++ ) {

        output.push( multiplyBy2( array[i] ) );
        
    }

    return output;

};

const myArray = [1,2,3,4,5];
const multiplyBy2 = ( num ) => num * 2;

const result = map(myArray, multiplyBy2);

console.log( result );