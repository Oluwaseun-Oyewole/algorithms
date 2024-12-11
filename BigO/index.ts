// O(N)
function sum_of_char(n: string): number {
  let sum = 0;
  for (let index = 0; index < n.length; index++) {
    sum += n.charCodeAt(index);
  }
  return sum;
}

// This is a perfect case of linear complexity.
// if n grows by x then the for loop will execute n of x times.

// O(N^2)
function sum_of_char_n2(n: string): number {
  let sum = 0;
  for (let index = 0; index < n.length; index++) {
    for (let j = 0; j < n.length; j++) {}
  }
  return sum;
}

// O(N^3)
function sum_of_char_n3(n: string): number {
  let sum = 0;
  for (let index = 0; index < n.length; index++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {}
    }
  }
  return sum;
}
