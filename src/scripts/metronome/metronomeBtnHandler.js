//app to handle button clicking for metronome page
const metronome = require("./metronomePlay")

const metronomeBtnActivate = () => {
    $("#metronome__start").on("click", () => {
        metronome(1000)
    })
}

module.exports = metronomeBtnActivate