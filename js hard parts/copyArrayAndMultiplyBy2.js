const print = ( log ) => console.log(log);

const copyArrayAndMultiplyBy2 = ( array ) => {

    const output = [];
    array.forEach( element => output.push( element * 2 ) );
    return output;

};

const myArray = [ 1, 2, 3 ];
const result = copyArrayAndMultiplyBy2( myArray );
print( result );