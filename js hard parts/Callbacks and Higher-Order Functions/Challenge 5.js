const mapWith = ( array, callback ) => {

    const output = [];
    array.forEach( e => output.push(multiplyBy2(e)) );
    return output

};

const myArray = [1,2,3,4,5];
const multiplyBy2 = ( num ) => num * 2;
const result = mapWith(myArray, multiplyBy2);

console.log( result );