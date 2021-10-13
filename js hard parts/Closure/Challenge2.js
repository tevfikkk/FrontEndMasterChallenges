const createFunctionPrinter = ( input ) => {

    const aFunction = (  ) => console.log( input );

    return aFunction;

};

const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');