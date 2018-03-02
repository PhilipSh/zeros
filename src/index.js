module.exports = function getZerosCount(number) {
  var numberOfZero = 0;
  for(;number > 0;){
  number = Math.floor(number/5);
  numberOfZero = numberOfZero + number;
}
return numberOfZero;
}

