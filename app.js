// Counting Sheep

//Recursively

let sheepCount = (num) => {
  if(num === 0) {
    return;
  }
  console.log(num + ' Another sheep jumps over the fence');
  sheepCount(num-1);
};

sheepCount(10);

// O(n) because the runtime changes based on the size of the input. 

//Iteratively

let sheepCount2 = (num) => {
  for(let i=num; i>0; i--) {
    console.log(i + ' Another sheep jumps over the fence');
  }
};

sheepCount2(10);

// O(n) because the runtime changes based on the size of the input. 

//---------------------------------------

//Array Double

//Recursively
//input is an array
//output is an array

let doubleArray = (arr) => {
  if(!arr.length) {
    return [];
  }
  return [(arr[0] * 2), ...doubleArray(arr.slice(1))];
};

console.log(doubleArray([7,6,5,4]));

// O(n) because the runtime changes based on the size of the input. 

//Iteratively

let doubleArray2 = (arr) => arr.map(value => value * 2);


console.log(doubleArray2([7,6,5,4]));

// O(n) because the runtime changes based on the size of the input. 


//-------------------------------------------------

//Reverse String

//Recursively

//input string
//output string

let stringReverser = (str) => {
  if (str.length === 0) {
    return '';
  }
  return stringReverser(str.slice(1)) + str[0];
};

console.log(stringReverser('hello'));

// O(n) because the runtime changes based on the size of the input. 

//Iteratively


let stringReverser2 = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

console.log(stringReverser2('hello'));
// str.forEach(el => console.log(r2(el)));





// O(n) because the runtime changes based on the size of the input. 