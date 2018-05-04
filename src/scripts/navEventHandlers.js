//function to activate nav buttons
const welcomePageBuilder = require("./welcomePageBuilder")
const intervalPageBuilder = require("./intervals")
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
    $("#nav__metronome").on("click", () => {})
    $("#nav__chords").on("click", () => {})
    $("#nav__modes").on("click", () => {})
}

module.exports = navButtons