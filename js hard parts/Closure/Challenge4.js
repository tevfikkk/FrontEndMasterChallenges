const once = ( callback ) => {

    let counter = 0;

    const x = ( num ) => {

        counter === 0 ? counter = callback ( num ) : false;

        return counter;

    };

    return x;

};


const addByTwo = (num) => num += 2;

const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6