//app to handle playing the metronome


function metronome() {
    setTimeout(function() {
        console.log("click")
        const audio = new Audio("audio/WebMetronomeSound.wav")
        audio.play()
        metronome();
    }, 300);
}

module.exports = metronome