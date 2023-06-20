// Your code here
Array.prototype.uniq = function() {  
  // const hash = {};
  const arr = [];
  
  this.forEach((el) => {
    // hash[el] = true;

    if (!arr.includes(el)) {
      arr.push(el);
    }
  });

  return arr;

  // return Object.keys(hash).map((el) => Number(el));
}


Array.prototype.twoSum = function() {
  const arr = this.toSorted((a, b) => a-b);
  const pairs = [];
  
  let i = 0;
  let j = (arr.length - 1);

  while (i !== j) {
    console.log(i);
    console.log(j);
    if ((arr[i] + arr[j]) === 0) {
      pairs.push([this.indexOf(arr[i]), this.indexOf(arr[j])]);
      j--;
    } else if ((arr[i] + arr[j]) > 0) {
      j--;
    } else {
      i++;
    }
  };
  return pairs;
}

Array.prototype.transpose = function() {
  const transposed = [];

  // for (let i = 0; i < this[0].length; i++) {
  //   const arr = [];

  //   for (let j = 0; j < this.length; j++) {
  //     arr.push(this[j][i]);
  //   }

  //   transposed.push(arr);
  // }

  // return transposed;


  this.forEach((el1, idx) => {
    const arr = [];

    this.forEach((el2, idx2) => {
      arr.push(this[idx2][idx]);
    })

    transposed.push(arr);
  });

  return transposed;
}


Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
}


Array.prototype.myMap = function(callback) {
  const arr = [];
  // const handleArray = initArrayHandler();

  this.myEach((el) => {
    arr.push(callback(el));
    // handleArray(callback(el));
  });

  return arr;
  // return handleArray();
};

// function initArrayHandler() {
//   const arr = [];

//   return function(element) {
//     if (element) {
//       arr.push(element);
//     }
//     return arr;
//   }
// }


Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue || this[0];

  this.myEach((el, i) => {
    if (initialValue === undefined && i === 0) {
    return
  }; 
    acc = callback(acc, el);
  });

  return acc;
}