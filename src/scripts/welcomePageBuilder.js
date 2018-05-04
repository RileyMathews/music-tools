//function to return html element representing the welcome page of the app
const componentFactory = require("./ComponentFactory")
const welcomePageBuilder = () => {
    const fragment = document.createDocumentFragment()
    const section = document.createElement("section")
    section.appendChild(componentFactory("h1", "Welcome", null, "welcome--main"))

    section.appendChild(componentFactory("p", "Welcome to the Musical Tools App, feel free to try out our various music tools"))

    fragment.appendChild(section)

    return fragment
}

module.exports = welcomePageBuilder