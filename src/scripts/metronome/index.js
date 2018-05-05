//index js file for metronome directory
const metronomePageStructure = require("./metronomePageStructure")
const appendHTML = require("../appendHTML")
const nukeHTML = require("../nukeHTML")
const activateButton = require("./metronomeBtnHandler")
//function to call the metronome tool page
const metronomePageBuilder = () => {
    nukeHTML("#main--output")
    appendHTML(metronomePageStructure(), "#main--output")
    $("#metronome--alert").css("display", "none")
    activateButton()
}

module.exports = metronomePageBuilder