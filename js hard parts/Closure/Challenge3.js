// function outer() {
//     let counter = 0; // this variable is outside incrementCounter's scope
//     function incrementCounter () {
//       counter ++;
//       console.log('counter', counter);
//     }
//     return incrementCounter;
//   }
  
//   const willCounter = outer();
//   const jasCounter = outer();
  
//   // Uncomment each of these lines one by one.
//   // Before your do, guess what will be logged from each function call.
  
//   // /*** Uncomment these to check your work! ***/
//   willCounter(); // 1
//   willCounter(); // 2
//   willCounter(); // 3
  
//   jasCounter(); // 1
//   willCounter(); // 4

const addByX = ( num ) => {

    const incrementX = ( x ) => num + x;

    return incrementX;


};

const a = addByX( 5 );
const b = a(6);

console.log(a);
console.log(b);