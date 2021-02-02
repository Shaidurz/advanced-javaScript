const students = [
    {id: 23, name: "Omor Sunny"},
    {id: 32, name: "Patla Khan"},
    {id: 34, name: "Alakar Don"},
    {id: 76, name: "Chupa Rustom"},
];
const output = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);

// const result = students.map(x => x.name)
// console.log(result);

// const biggerId = students.filter( x => x.id <36);
// console.log(biggerId);
function doSomething(x, y = 4){

    console.log(y);
    
    }
    
    doSomething(3,2);