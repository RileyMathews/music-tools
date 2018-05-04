//function to return html elements
const componentFactory = (tag, content, classes, id) => {
    const element = document.createElement(tag)
    if (typeof content !== "undefined" && content !== null) {
        element.textContent = content
    }
    if (typeof classes !== "undefined" && classes !== null) {
        element.classList += classes
    }
    if (typeof id !== "undefined" && id !== null) {
        element.setAttribute("id", id)
    }
    return element
}

module.exports = componentFactory