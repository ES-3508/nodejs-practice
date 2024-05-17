// Task 5: Advanced Array Manipulation
function groupByAge(people) {
  // Your code here
}

// Example usage:
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 }
];
console.log(groupByAge(people)); 
// Output: 
// {
//   25: ['Alice', 'Charlie'],
//   30: ['Bob', 'David']
// }

// Hint:
// Use reduce to group by age:
// people.reduce((acc, person) => {
//   if (!acc[person.age]) {
//     acc[person.age] = [];
//   }
//   acc[person.age].push(person.name);
//   return acc;
// }, {})
