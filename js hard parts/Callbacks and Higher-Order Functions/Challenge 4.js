const forEach = ( array, callback ) => {


    for (let i = 0; i < array.length; i++){
        callback(array[i]);
    }


};

let alphabet = '';
const letters = [ 'a', 'b', 'c', 'd' ];

const secondFunc = ( char ) => alphabet += char;
forEach(letters, secondFunc);

console.log( alphabet );
