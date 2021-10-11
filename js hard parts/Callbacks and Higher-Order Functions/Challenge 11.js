const print = (a) => console.log(a);

const objectFilter = ( obj, callback ) => {

  const newObj = {};

  //  for (let key in obj) {

  //      if (callback(key) === callback(obj[key])) {

  //        newObj[key] = callback(key);    
          
  //      }
  //    }

  Object.keys( obj ).forEach( el => callback( el ) === callback ( obj[ el ] ) ? newObj[ el ] = callback( el ) : false ) ;
    
  return newObj; 

};

const person = {

  immortal: "Immortal",
  city: "city",
  job: "Prostitude",
  //greet = () => print( "Greetings!" ),

};

const str = ( upper ) => upper.toUpperCase(); 

print( objectFilter( person, str ) );