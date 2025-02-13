function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5

//Type Error
let result3 = add("5", 3); //This will throw an error because typescript will detect that you are adding a number to a string. 