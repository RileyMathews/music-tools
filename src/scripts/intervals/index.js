//index js file for intervals directory
const intervalPageStructure = require("./intervalPageStructure")

//function to call the intervals tool page
const buildIntervalTools = () => {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(intervalPageStructure())
    return fragment
}

module.exports = buildIntervalTools