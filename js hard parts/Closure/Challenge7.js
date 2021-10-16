const rollCall = ( names ) => {

    let counter = 0;

    // return (  ) => {

    //     let name = names[counter];
    //     // names.forEach( el => names.length === 0 ? console.log( 'Everyone accounted for' ) : names.shift )
    //     if ( counter === 3 ) {
    //         console.log( 'Everyone accounted for' );
    //     } else {
    //         console.log( name );
                
    //     }

    //     ++counter;
    // }

    // return (  ) => { 

    //     let name = names[counter];

    //     counter === 3 ? console.log( 'Everyone accounted for' ) : console.log( name );

    //     ++counter;

    // };

    return (  ) => !names.length ? console.log( 'Everyone accounted for' ) : console.log( names.shift() );

};

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'