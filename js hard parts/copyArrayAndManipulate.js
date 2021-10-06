const print = ( log ) => console.log(log);

const copyArrayAndManipulate = ( array, instructions ) => array.map( a => multiplyBy2( a ) );

const multiplyBy2 = input => input * 2;
const result = copyArrayAndManipulate( [ 1, 2, 3 ] );
print(result);

    // const output = [];
    // array.forEach( element => output.push( instructions(element) ) );
    // return output;
