//Anagrams
//input a string
//output multiple strings
// input for reach recursive call is the prefix and the remaining letters
//output for each call are the 6 permutations of each prefix
let count = 1;
let anagrams = (prefix, str) => {
  
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      count++;
      let currentLetter = str.slice(i, i + 1);
      let previousLetters = str.slice(0, i);
      let afterLetters = str.slice(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
};
// anagrams(' ', '434');
// console.log(count);

// O(n!) because it runs the algorithm once for every single permutation, and permuatations are factorial.

//Iteratively

//Iterative version for testing with minor alterations from from
//https://www.quora.com/Whats-an-algorithm-to-print-the-permutations-of-a-string-without-recursion

function perm(a) {
  var r = [
      [a[0]]
    ],
    t = [],
    s = [];
  if (a.length <= 1) return a;
  for (var i = 1, la = a.length; i < la; i++) {
    for (var j = 0, lr = r.length; j < lr; j++) {
      r[j].push(a[i]);
      t.push(r[j]);
      for (var k = 1, lrj = r[j].length; k < lrj; k++) {
        for (var l = 0; l < lrj; l++) s[l] = r[j][(k + l) % lrj];
        t[t.length] = s;
        s = [];
      }
    }
    r = t;
    t = [];
  }
  return r.map(el => el.join(''));
}

// console.log(perm('helloworld'));

// O(n!) because it runs the algorithm once for every single permutation, and permuatations are factorial.

//Animal Hierarchy

//input of program = array of objects and a parent
//input of each recurv call = the parent
//output of call = all id's with the same parent
//new object of a tree of objects

//Factorial

let factorial = (num) => {

  if(num === 0 || num === 1) {
    return 1;
  }
  else{
    return num * factorial(num-1);
  }

};

// console.log(factorial(5));

// O(n) because the runtime changes based on the size of the input. 

//Iteratively

let factorial2 = (num) => {
  let total = num;
  
  for(let i=num; i>1; i--) {
    
    total *= (i-1);
  }
  return total;
};

// console.log(factorial2(5));

// O(n) because the runtime changes based on the size of the input. 

//Fibonacci

let fibonacci = (num) => {
  if (num === 0) {
    return 0;
  }
  if(num === 1) {
    return 1;
  }
  else {
    return fibonacci(num-1) + fibonacci(num-2);
  }
};

// console.log(fibonacci(6));

// O(n) because the runtime changes based on the size of the input. 

//Iteratively

let fibonacci2 = (num) => {
  let firstNum = 0;
  let secondNum = 1;
  let result = 1;
  for(let i=2; i<=num; i++) {
    result = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = result;
  }
  return result;
};

// O(n) because the runtime changes based on the size of the input. 

// console.log(fibonacci2(6));

//Organizational Chart
var organization = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {}
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {}
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {}
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {}
      }
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {}
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {}
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {}
      }
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {}
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {}
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {}
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {}
      }
    }
  }
};

function traverse2(node, indent = 0) {
  for (var key in node) {
    console.log(' '.repeat(indent), key);
    traverse2(node[key], indent + 4);
  }
}

// traverse2(organization);

// O(n) because the runtime changes based on the size of the input. 


//Iteratively

function itertrav(node) {
  var first = Object.keys(node);
  var second = Object.keys(node[first]);

  for (let i = 0; i < first.length; i++) {
    console.log(first[i]);

    for (let j = 0; j < second.length; j++) {
      console.log(' '.repeat(2), second[j]);
      let third = Object.keys(node[first][second[j]]);

      for (let k = 0; k < third.length; k++) {
        console.log(' '.repeat(4), third[k]);
        let fourth = Object.keys(node[first][second[j]][third[k]]);

        for (let x = 0; x < fourth.length; x++) {
          console.log(' '.repeat(8), fourth[x]);
        }
      }
    }
  }
}

// itertrav(organization);

// O(n^4) Polynomial time. 4 nested loops.

function factor(num) {
  if (num === 1) return 1;
  return num * factor(num - 1);
}

let compareFacExp = num => {
  console.log('factorial: \\/');
  console.log(factor(num));
  console.log('Exponential: \\/');
  console.log(Math.pow(num, num));
};
compareFacExp(1);
compareFacExp(2);
compareFacExp(3);
compareFacExp(5);
compareFacExp(10);
compareFacExp(20);
compareFacExp(40);
compareFacExp(80);
compareFacExp(100);
compareFacExp(500);