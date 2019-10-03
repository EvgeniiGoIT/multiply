module.exports = function multiply(first, second) {
  first = first.split("");
  second = second.split("");
  let result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      result[i + j]
        ? (result[i + j] += first[i] * second[j])
        : (result[i + j] = first[i] * second[j]);
    }
  }
  result = result.reverse();
  for (let i = 0; i < result.length - 1; i++) {
    if (result[i] >= 10) {
      result[i + 1] += Math.floor(result[i] / 10);
      result[i] = result[i] % 10;
    }
  }
  return result.reverse().join("");
};
