// Challenge 7
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

// function intersection(arrays) {
    
//      return arrays.reduce((array1, array2) => {
//       return array2.filter(el => array1.includes(el));
//     });
// }

const intersection = ( arrays ) => arrays.reduce( (a1, a2) => a2.filter( x => a1.includes( x ) ) );

const array1 = [ [1, 2, 4], [4, 5, 6, 2], [1, 4, 2] ];

const x = intersection( array1 );

console.log(x);