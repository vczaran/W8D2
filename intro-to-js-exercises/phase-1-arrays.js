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
