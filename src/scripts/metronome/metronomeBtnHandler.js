//app to handle button clicking for metronome page
const metronome = require("./metronomePlay")


const metronomeBtnActivate = () => {
    $("#metronome__start").on("click", () => {
        if (metronome.playing()) {
            metronome.stop()
        } else {
            let speed = parseFloat($("#metronome__bpm").val())
            if (!isNaN(speed)) {
                const rate = speed / 120
                console.log(speed,rate)
                metronome.rate(rate)
                metronome.play()
            } else {
                alert("please enter a non decimal number")
            }
        }
    })
}

module.exports = metronomeBtnActivate