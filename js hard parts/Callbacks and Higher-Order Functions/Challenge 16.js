const goodKeys = ( obj, callback ) => {

    let arr = [];

    for ( let [ key, value ] of Object.entries( obj ) ) {

        c = callback( value ) ? arr.push(key) : false;

    }

    return arr;


};

const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };

const startsWithBird = ( str ) => str.slice( 0, 4 ).toLowerCase() === 'bird';

const x = goodKeys( sunny, startsWithBird );

console.log( x );

// should log: ['charlie', 'dee']