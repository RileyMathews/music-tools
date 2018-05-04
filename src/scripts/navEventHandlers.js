//function to activate nav buttons
const welcomePageBuilder = require("./welcomePageBuilder")
const intervalPageBuilder = require("./intervals")
const metronomePageBuilder = require("./metronome")
const chordPageBuilder = require("./chords")
const modePageBuilder = require("./modes")
const nukeHTML = require("./nukeHTML")
const appendHTML = require("./appendHTML")


const navButtons = () => {
    $("#nav__home").on("click", () => {
        welcomePageBuilder()
    })

    $("#nav__intervals").on("click", () => {
        intervalPageBuilder()
    })

    $("#nav__metronome").on("click", () => {
        metronomePageBuilder()
    })

    $("#nav__chords").on("click", () => {
    chordPageBuilder()
    })

    $("#nav__modes").on("click", () => {
    modePageBuilder()
    })
}

module.exports = navButtons