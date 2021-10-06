const union = ( arrays ) =>  arrays.reduce( (a1, a2) => {

    const newElements = a2.filter( el => !a1.includes(el) ); // getting the same elements only once

    return a1.concat( newElements );
    
} );

const theArray = [ [5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5] ];

const x = union( theArray );

console.log( x );