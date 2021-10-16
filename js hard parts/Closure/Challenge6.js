const delay = ( callback, wait ) => {

    return ( ) => setTimeout( ( x ) => callback( x ), wait );

};

const multiplyBy2 = ( num ) => num * 2;

const laa = delay( multiplyBy2, 5 );

console.log( laa( 5 ) );