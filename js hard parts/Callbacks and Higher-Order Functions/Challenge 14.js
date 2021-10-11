const countBy = ( array, callback ) => {

    return array.reduce( ( obj, item ) => {

        let result = callback( item );

        console.log(result);

        obj[ result ] ? ( obj[ result ] = obj[ result ] + 1 ) : ( obj[ result ] = 1 );

        return obj;

    }, Object.create(null) );

};


const evenOdd = ( num ) => num % 2 === 0 ? "even" : "odd";

const x = countBy([1, 2, 3, 4, 5], evenOdd);

console.log(x);

// console.log(
//     countBy([1, 2, 3, 4, 5], function (num) {
//       if (num % 2 === 0) return "even";
//       else return "odd";
//     })
//   );