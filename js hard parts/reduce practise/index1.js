const people = [ 

    { id: "1", name: "Leigh", age: 35 },
    { id: "2", name: "Jenny", age: 30 },
    { id: "3", name: "Heather", age: 28 },

 ];

 let result;

 //count

 result = people.reduce( (acc, person) => acc + 1, 0 );

 //sum ages

 result = people.reduce( (acc, person) => acc + person.age, 0 );

 // array of names (map)

 
 //convert to id => person lookup (dict)

 console.log(result);