const multiMap = (arrVals, arrCallbacks) => {

//     const obj = {};
 
//    // arrVals.forEach( (el, index) => obj[index] = [] ).forEach( 
//    //   (el, index) => obj[index].concat(arrCallbacks[index](arrVals[el]) ) )
//     arrVals.forEach( (el, index, arr) => {
//         obj[el] = [].
//         forEach( (el, index, arr) => {
//             obj[el].push(arrCallbacks[index](arrVals[index]))
//     } ) 
//     ) 

    const obj = {};

    for (let i = 0; i < arrVals.length; i++) {
        obj[arrVals[i]] = [];
        for(let j = 0; j < arrCallbacks.length; j++) {
            obj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
        }
    }

    return obj;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
 

