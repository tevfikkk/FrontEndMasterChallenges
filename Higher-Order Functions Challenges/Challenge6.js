const reduce = (array, callback, initialValue) => {
    let acc = initialValue;
    for (let i = 0; i < array.length; i++){
        acc = callback(acc, array[i]);
    }
    return acc;
};

const nums = [1, 2, 3];
const add = (a, b) => a + b;
console.log(reduce(nums, add, 0)); // 6



