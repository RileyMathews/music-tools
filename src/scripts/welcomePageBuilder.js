//function to return html element representing the welcome page of the app
const componentFactory = require("./ComponentFactory")
const appendHTML = require("./appendHTML")
const nukeHTML = require("./nukeHTML")

const welcomePageBuilder = () => {
    nukeHTML("#main--output")
    const fragment = document.createDocumentFragment()
    const section = document.createElement("section")
    section.appendChild(componentFactory("h1", "Welcome", null, "welcome--main"))

    section.appendChild(componentFactory("p", "Welcome to the Musical Tools App, feel free to try out our various music tools"))

    fragment.appendChild(section)

    appendHTML(fragment, "#main--output")
}

module.exports = welcomePageBuilder