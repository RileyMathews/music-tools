//app to handle button clicking for metronome page
const metronome = require("./metronomePlay")


const metronomeBtnActivate = () => {
    $("#metronome__start").on("click", () => {
        if (metronome.playing()) {
            metronome.stop()
        } else {
            let speed = parseFloat($("#metronome__bpm").val())
            metronome.rate(speed)
            metronome.play()
        }
    })
}

module.exports = metronomeBtnActivate