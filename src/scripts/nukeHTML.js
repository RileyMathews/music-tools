//function to clear everything inside the article tags of the dom
const nukeHTML = element => {
    const parent = $(element)[0]
    console.log(parent)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

module.exports = nukeHTML