//function to return html elements
const componentFactoryText = (tag, content, classes, id) => {
    const element = document.createElement(tag)
    element.textContent = content
    if (typeof classes !== "undefined" && classes !== null) {
        element.classList += classes
    }
    if (typeof id !== "undefined" && id !== null) {
        element.setAttribute("id", id)
    }
    return element
}

module.exports = componentFactoryText