const objOfMatches = (arr1, arr2, callback) => {

    const obj = {};
    arr1.forEach((el, index) => callback(el) === arr2[index] ? obj[el] = arr2[index] : false);
    return obj

};

const upperCase = n => n.toUpperCase();

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], upperCase));