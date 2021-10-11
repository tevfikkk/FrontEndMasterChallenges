const groupBy = ( array, callback ) => {

    return array.reduce( ( obj, item, index, arr ) => {

        let result = callback ( item );

        obj[ result ] = arr.filter( el => parseInt( el ) === parseInt( result ) );
       
        return obj;

    }, Object.create( null ) );

};

const decimals = [1.3, 2.1, 2.4];

const floored = ( num ) => Math.floor( num );

const x = groupBy( decimals, floored );

console.log( x );