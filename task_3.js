function filterAdults(people) {
  // Your code here
}

// Example usage:
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 18 },
  { name: 'Charlie', age: 19 }
];
console.log(filterAdults(people)); // Output: [{ name: 'Bob', age: 18 }, { name: 'Charlie', age: 19 }]

// Hint:
// Use filter to get adults: people.filter(person => person.age >= 18)
