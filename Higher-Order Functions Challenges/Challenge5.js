// For this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop. 

const mapWith = (arr, callback) => { 
    const array = [];
    forEach(arr, el => array.push(callback(el)));
    return array;
};

const forEach = (arr, callback) => { 
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
};

const multiplyBy2 = n => n * 2;
console.log(mapWith([1,2,3], multiplyBy2));