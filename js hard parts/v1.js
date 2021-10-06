function copyArrayAndManipulate( array, instructions ) {

    return array.map( function(element,index,arr) { 
        return arr.concat( instructions(element) ); 
    } );

}

function multiplyBy2(input){

    return input * 2;

}

var result = copyArrayAndManipulate( [ 1, 2, 3 ], multiplyBy2 );

console.log(result);