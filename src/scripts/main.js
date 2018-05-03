const nukeHTML = require("./nukeHTML")
const appendHTML = require("./appendHTML")
const welcomePageBuilder = require("./welcomePageBuilder")

appendHTML(welcomePageBuilder(), "#main--output")