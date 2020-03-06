module.exports = class DepthCalculator {
    calculateDepth(arr, max = 0, allmax = []) {
        max++;
        allmax.push(max);

        for (let unit of arr) {
            if (Array.isArray(unit) === true) {
                this.calculateDepth(unit, max, allmax);
            }
        }

        return Math.max(...allmax)
    }
};