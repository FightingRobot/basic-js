module.exports = function repeater(str, options) {
    let repeat = [];

    if (str === null) str = 'null'

    let repeatTimes = 1;
    if (options.repeatTimes !== undefined) repeatTimes = options.repeatTimes;

    let separator = '+';
    if (options.separator !== undefined) separator = options.separator;

    let addition = options.addition;
    if (options.addition === null) addition = 'null';

    let additionRepeatTimes = 1;
    if (options.additionRepeatTimes !== undefined) additionRepeatTimes = options.additionRepeatTimes;

    let additionSeparator = '|';
    if (options.additionSeparator !== undefined) additionSeparator = options.additionSeparator;

    for (let i = 0; i < repeatTimes; i++) {
        let newEntry = [];
        newEntry.push(str);

        for (let i = 0; i < additionRepeatTimes; i++) {
            newEntry.push(addition);

            if (i < additionRepeatTimes - 1) {
                newEntry.push(additionSeparator);
            }

        }
        newEntry = newEntry.join('');
        repeat.push(newEntry);
    }
    return repeat.join(separator)
};