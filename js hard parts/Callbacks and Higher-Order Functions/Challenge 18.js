const objFilter = ( obj, callback ) => {

    const newObj = {};

    for ( let [key, value] of Object.entries( obj ) ) {

        value === callback( parseInt ( key ) ) ? newObj[ key ] = value : false;

    }

    return newObj;

};

const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log(objFilter(startingObj, half));