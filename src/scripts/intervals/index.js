//index js file for intervals directory
const intervalPageStructure = require("./intervalPageStructure")
const appendHTML = require("../appendHTML")
const nukeHTML = require("../nukeHTML")
const activateBtn = require("./intervalBtnHandler")

//function to call the intervals tool page
const buildIntervalTools = () => {
    nukeHTML("#main--output")
    const fragment = document.createDocumentFragment()
    fragment.appendChild(intervalPageStructure())
    appendHTML(fragment, "#main--output")
    activateBtn()
}

module.exports = buildIntervalTools