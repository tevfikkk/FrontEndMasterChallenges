const union = (...arrays) => {

    return arrays.reduce( (acc, val) => {
        const els = val.filter(el => !acc.includes(el));
        return acc.concat(els);
    }, [] );

}; 

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));




