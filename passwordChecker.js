function passwordChecker(s) {
  let finalCount = 0,
    lcase = 1,
    ucase = 1,
    digit = 1; //initializing variables for all the 3 mandatory conditions.
  let carr = s.split(""); //spliting the string array by characters.
  let arr = new Array(carr.length);

  //checking the mandatory conditions
  for (let i = 0; i < arr.length; ) {
    if (/[a-z]/.test(carr[i])) lcase = 0;
    if (/[A-Z]/.test(carr[i])) ucase = 0;
    if (/[0-9]/.test(carr[i])) digit = 0;

    let j = i;
    while (i < carr.length && carr[i] === carr[j]) i++;
    arr[j] = i - j;
  }

  let mandatoryCheckCount = lcase + ucase + digit;

  if (arr.length < 6) {
    //checking if total count is less than 6.
    finalCount +=
      mandatoryCheckCount + Math.max(0, 6 - (arr.length + mandatoryCheckCount));
  } else {
    //checking if the length is greater than 20.
    let overLen = Math.max(arr.length - 20, 0),
      leftOver = 0;
    finalCount += overLen;
    //if the lenght is greater than 20, first delete the recurring characters.
    for (let k = 1; k < 3; k++) {
      for (let i = 0; i < arr.length && overLen > 0; i++) {
        if (arr[i] < 3 || arr[i] % 3 !== k - 1) continue;
        arr[i] -= Math.min(overLen, k);
        overLen -= k;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3 && overLen > 0) {
        let need = arr[i] - 2;
        arr[i] -= overLen;
        overLen -= need
      }

      if (arr[i] >= 3) leftOver += Math.floor(arr[i] / 3);
    }

    finalCount += Math.max(mandatoryCheckCount, leftOver);
  }
  //final output count.
  // console.log(finalCount);
  return finalCount;
}
module.exports = passwordChecker;