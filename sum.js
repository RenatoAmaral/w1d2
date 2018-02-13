/*
Given that I have some numbers
I want to sum them all
so that I can know the result
*/

/*var numbers = [10 ,42 ,13, 8086,2];
var total = 0;

for (var i = 0; i < numbers.length; i++) {
  total +=numbers[i];
  console.log('Now adding', numbers[i]);

}

console.log('The total is', total);*/


/*var numbers = process.argv.slice(2);
var total = 0;

for (var i = 0; i < numbers.length; i++) {
  var actualNumber = Number(numbers[i]);
  if(isNaN(Number(actualNumber))){
    continue;
  }
  total += actualNumber;
  console.log('Now adding', actualNumber);

}

console.log('The total is', total);*/


function sum(numbers) {
  // body...
  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    var actualNumber = Number(numbers[i]);
    if(isNaN(Number(actualNumber))){
      continue;
    }
    total += actualNumber;
  }
  return total;
  }

console.log('The total is', sum(process.argv.slice(2)));

