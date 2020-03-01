module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'We need an array!'
    if (arr.includes('--double-next') || arr.includes('--double-prev') || arr.includes('--discard-next') || arr.includes('--discard-prev')) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--double-next') {
                if (arr[i + 1] == undefined) {
                    continue
                }
                newArr.push(arr[i + 1]);
            } else if (arr[i] == '--double-prev') {
                if (arr[i - 1] == undefined) {
                    continue
                }
                newArr.push(arr[i - 1])
            } else if (arr[i] == '--discard-next') {
                i++
            } else if (arr[i] == '--discard-prev') {
                newArr.pop()
            } else {
                newArr.push(arr[i])
            }
        }
        return newArr
    } else {
        return arr
    }
};
