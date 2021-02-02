const numbers = [3, 4, 5, 6, 7, 10, 9, 8];
// const output =[];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map( x => x * x);
// console.log(result);

// const bigger = numbers.filter(x => x > 4);
// console.log(bigger);

const isThere = numbers.find( x => x > 7);
console.log(isThere);