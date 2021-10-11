const majority = ( array, callback ) => {

    let oddNumbers = 0;
    let evenNumbers = 0;

    array.forEach( el => callback ( el ) === false ? oddNumbers++ : evenNumbers++ );

    return oddNumbers !== evenNumbers;

};

const isOdd = ( num ) => !(num % 2 === 0);

const x = majority([1, 2, 3, 4, 5], isOdd);

console.log( x );