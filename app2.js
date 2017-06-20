//nth Triangle Number

//Recursively

let triangleNumber = (num) => {
  if(num === 1){
    return 1;
  }
  return num + triangleNumber(num-1);
};

console.log(triangleNumber(10));

// O(n) because the runtime changes based on the size of the input. 

//Iteratively

let triangleNumber2 = (num) => {
  let total = num;
  for(let i=num; i>0; i--) {
    total += (i-1);
  }
  return total;
};

console.log(triangleNumber2(10));

// O(n) because the runtime changes based on the size of the input. 

// Split String

//input string and a seperator
//returns an array
//input of each call is current character

let stringSplitter = (str, seperator) => {
 
  let seperatorPointer = str.indexOf(seperator);
  
  if(seperatorPointer === -1) return [str];
  
  return [str.slice(0, seperatorPointer)].concat(stringSplitter(str.slice(seperatorPointer + seperator.length), seperator));
 
};

console.log(stringSplitter('12/26/5624', '/'));

// O(n) because the runtime changes based on the size of the input. 

//Iteratively

let stringSplitter2 = (str, seperator) => {
  return str.split(seperator);
};

console.log(stringSplitter2('12/26/5624', '/'));

//non-recursive version
let sp2 = (str, sep) => {
  let curr = [];
  let acc = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sep) {
      acc.push(curr);
      curr = [];
    } else {
      curr.push(str[i]);
    }
  }
  if (curr.length > 0) acc.push(curr);
  acc = acc.map(val => {
    //console.log(val);
    return val.join('');
  });
  console.log('non recursive function returns \\/');
  console.dir(acc);
  return acc;
};

sp2('test that bob failed', ' ');

// O(n) because the runtime changes based on the size of the input. 

//Binary Representation

//input number
//output binary number
//input of each recursive call is num / 2
//output is the new num

let binaryNums = (num) => {
  if(num>0) {
    let binary = num%2;
    return (binaryNums(Math.floor(num/2))+ binary);
  } else {
    return '';
  }
  
};

// console.log(binaryNums(25));

//This algorithm is O(log(n)) because its is only processing a fraction of the input each time. In this case, it is cutting it in half.

//Iteratively

let binaryNums2 = (num) => {
  if(num === 0) return 0;
    
  let result = [];
  while(num>0){
    let binary = num%2;
    result.push(binary);
    let newNum = Math.floor(num/2);
    num = newNum;
  }
  result.reverse();
  return result;
};

console.log(binaryNums2(5));


//This algorithm is O(log(n)) because its is only processing a fraction of the input each time. In this case, it is cutting it in half.

let binaryNums3 = (num) => {
  if(num === 0) return 0;
  let result = [];
  for(let i=num; i>=1; Math.floor(i/=2)) {
    let binary = num%2;
    result.push(binary);
    let newNum = Math.floor(num/2);
    num = newNum;
  }
  return result.reverse().join('');
  
};

console.log(binaryNums3(5));