//app to handle the logic of calculating the intervals of the notes
const intervals = require("./intervalsDB")

const calculateIntervals = (note1, note2) => {
    let interval = note2 - note1
    if (interval < 0) {
        interval += 12
    }
    const intervalLookupKey = "_" + interval
    return intervals[intervalLookupKey]
}

module.exports = calculateIntervals