// Your code here
Array.prototype.uniq = function() {  
  const hash = {};
  
  this.forEach((el) => {
    hash[el] = true;
  });

  return Object.keys(hash).map((el) => Number(el));
}