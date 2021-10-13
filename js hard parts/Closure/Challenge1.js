const createFunction = (  ) => {


    const log = ( log ) => console.log( 'hello' );

    return log;


};

const function1 = createFunction();
function1(); // => should console.log('hello');