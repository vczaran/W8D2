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