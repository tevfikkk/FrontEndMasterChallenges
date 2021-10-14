const after = ( count, callback ) => {

    let counter = 0;

    return () => ++counter === count ? callback() : false; // This is the line where the magic happens

};

const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed