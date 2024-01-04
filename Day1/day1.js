const fs = require('fs');

const input_strings = fs.readFileSync('./input.txt').toString('UTF8').split('\n');

function first_part() {
  let sum = 0;
  for (let line of input_strings) {
    let first_num = line.match(/\d/);
    let last_num = line.match(/\d(?=[^\d]*$)/);
    if (first_num == null || last_num == null) continue;
    let combined = first_num[0] + last_num[0];
    sum += parseInt(combined);
  }
  return sum;
}

console.log(first_part()); 
