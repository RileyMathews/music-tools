const nukeHTML = require("./nukeHTML")
const appendHTML = require("./appendHTML")
const welcomePageBuilder = require("./welcomePageBuilder")
const intervalPageBuilder = require("./intervals")
const navEventHandlers = require("./navEventHandlers")

navEventHandlers()
appendHTML(welcomePageBuilder(), "#main--output")

