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
        nukeHTML("#main--output")
        appendHTML(welcomePageBuilder(), "#main--output")
    })

    $("#nav__intervals").on("click", () => {
        nukeHTML("#main--output")
        appendHTML(intervalPageBuilder(), "#main--output")
    })

    $("#nav__metronome").on("click", () => {
        nukeHTML("#main--output")
        appendHTML(metronomePageBuilder(), "#main--output")
    })

    $("#nav__chords").on("click", () => {
    nukeHTML("#main--output")
    appendHTML(chordPageBuilder(), "#main--output")
    })

    $("#nav__modes").on("click", () => {
    nukeHTML("#main--output")
    appendHTML(modePageBuilder(), "#main--output")
    })
}

module.exports = navButtons