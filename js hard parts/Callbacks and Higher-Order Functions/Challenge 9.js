// function objOfMatches(arr1, arr2, callback){
//     return arr1.reduce((obj, current, index) => {
//       if(arr2[index] === callback(current)) obj[current] = arr2[index]
//       return obj
//     }, {})
//   }
  
//   console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));


const objOfMatches = ( array1, array2, callback ) => {

    return array1.reduce( (obj, current, index) => { 

        array2[index] === callback( current ) ? obj[ current ] = array2[ index ] : false

        return obj;
        
     }, {})

}

const str = ( str ) => str.toUpperCase();

const objects = objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], str);

console.log( objects );
