module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 7;
    for (let i = 3; i < disksNumber; i++) {
        turns = turns * 2 + 1;
    }

    let seconds = turns / (turnsSpeed / 3600);
    return { turns, seconds }
}