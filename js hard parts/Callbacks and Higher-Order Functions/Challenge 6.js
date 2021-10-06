// Challenge 6
//
// Create a function called reduce that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// reduce(nums, add, 0);   //-> 8
// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.

const reduce = ( array, callback, initialValue ) => {

    let accumulatorValue = initialValue;

    for( let i = 0; i < array.length; i++ ) {

        accumulatorValue = add( accumulatorValue, array[i] );

    }

    // array.forEach( element => accumulatorValue = add( accumulatorValue, element ) );  --- with forEach

    return accumulatorValue;

};

const nums = [1, 2, 3];

const add = ( num1, num2 ) => num1 + num2;

const x = reduce(nums, add, 0)

console.log(x);