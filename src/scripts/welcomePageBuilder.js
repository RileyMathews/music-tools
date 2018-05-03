//function to return html element representing the welcome page of the app
const componentFactoryText = require("./TextComponentFactory")
const welcomePageBuilder = () => {
    const fragment = document.createDocumentFragment()
    const section = document.createElement("section")
    section.appendChild(componentFactoryText("h1", "Welcome", null, "welcome--main"))

    section.appendChild(componentFactoryText("p", "Welcome to the Musical Tools App, feel free to try out our various music tools"))

    fragment.appendChild(section)

    return fragment
}

module.exports = welcomePageBuilder