//app to handle playing the metronome



var metronome = new Howl({
    src: ["audio/WebMetronomeSound.wav"],
    loop: true,
    rate: 1
})


module.exports = metronome