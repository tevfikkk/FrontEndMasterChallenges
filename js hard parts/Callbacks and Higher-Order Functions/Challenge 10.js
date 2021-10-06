const multiMap = ( arrays, arrayCb ) => {

    const objects = {};

    for ( let i = 0; i < arrays.length; i++ ) {

        objects[ arrays [i] ] = [];

        for ( let j = 0; j < arrayCb.length; j++ ) {

            objects[ arrays [i] ].concat[ arrayCb[j]( arrays[i] ) ]; 

        }

    }

    arrays.map( el => { arrayCb.forEach( el1 => arrays[ el ].concat[ arrayCb[ el1 ]( arrays[ el ] ) ] ) } );



    return objects;



};

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));










// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }