//function to append html element passed to it to section also passed to it
const appendHTML = (elementToAppend, parentElement) => {
    $(parentElement).append(elementToAppend)
}

module.exports = appendHTML