module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false
  let team = [];

  for (let unit of arr) {
    if (typeof unit == 'string') {
      for (let char of unit) {
        if (char !== ' ') {
          team.push(char.toUpperCase());
          break
        }
      }
    }
  }
  return team.sort().join('')
};