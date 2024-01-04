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

function second_part() {
  const mapper ={
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
  };
  let sum = 0;
  for (let line in input_strings) {
    line = line.replace(/one|two|three|four|five|six|seven|eight|nine|zero/g, match => mapper[match]);
    let first_num = line.match(/\d/);
    let last_num = line.match(/\d(?=[^\d]*$)/);
    if (first_num == null || last_num == null) continue;
    let combined = first_num[0] + last_num[0];
    sum += parseInt(combined);
  }
  return sum;
}

console.log(second_part()); 
