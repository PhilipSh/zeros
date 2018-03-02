module.exports = function getZerosCount(number) {
  var multiplier2 , multiplier5;
  var numberFive, numberTwo;
  multiplier2 = 2;
  multiplier5 = 5;
  numberFive = 0;
  numberTwo = 0;
  for(var j = 1; j <= number; j++){
  var newJ;
  newJ = j;
  while(newJ%multiplier2 == 0){
    newJ = newJ / multiplier2;
    numberTwo++;
  }
  while(newJ%multiplier5 == 0){
    newJ = newJ / multiplier5;
    numberFive++;
  }
}
  if(numberFive > numberTwo)return numberTwo;
  else return numberFive;
}
