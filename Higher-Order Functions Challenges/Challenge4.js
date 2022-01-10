const forEach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
};

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
const charAdder = char => alphabet += char;
forEach(letters, charAdder);

console.log(alphabet); //abcd

