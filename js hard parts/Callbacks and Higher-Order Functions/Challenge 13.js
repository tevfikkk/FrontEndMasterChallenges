const prioritize = ( array, callback ) => {

    const newArray = [];

    let startsWithS = array.filter( el => callback( el ) ? newArray.concat( el ) : false );
    let dsntStartWithS = array.filter( el => !callback( el ) ? newArray.concat( el ) : false );

    return [...startsWithS, ...dsntStartWithS];


};

const startsWithS = ( str ) => str[0] === 's' || str[0] === 's';
const x = prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS);

console.log( x );

