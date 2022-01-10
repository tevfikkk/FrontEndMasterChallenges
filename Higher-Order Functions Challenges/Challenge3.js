// I'm aware of that it's forbidden to use push method in functional programming
// I was asked to have built a map method by hand in the challenge

const map = (arr, callback) => {
    const array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(callback(arr[i]));
    }
    return array;
};

const multiplyBy2 = n => n * 2;
console.log(map([1,2,3], multiplyBy2));