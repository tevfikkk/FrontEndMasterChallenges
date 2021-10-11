const commutative = ( cb1, cb2, val ) => {

    return cb1 ( cb2 ( val ) ) === cb2 ( cb1 ( val ) ) ? true : false; 

};

const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;

console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false