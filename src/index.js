module.exports = function getZerosCount(number) {
  // your implementation
  let zerosCount = 0;
  let nPow=1;
  do {
    countTemt = Math.floor(number / Math.pow(5, nPow));
    zerosCount += countTemt;
    nPow ++;
  } while (countTemt >= 1);
  return zerosCount;
}
