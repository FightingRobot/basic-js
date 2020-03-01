module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(x => x.forEach(a => a == '^^' ? count++ : count))
  return count
}