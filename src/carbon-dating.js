const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity !== 'string') return false

  if (sampleActivity.indexOf('.') !== sampleActivity.lastIndexOf('.')) {
    sampleActivity = sampleActivity.split('');
    sampleActivity.splice(sampleActivity.lastIndexOf('.'), 1);
    sampleActivity = sampleActivity.join('');
  }

  if (isNaN(Number(sampleActivity)) || sampleActivity > 15 || sampleActivity <= 0) return false

  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(t);
};