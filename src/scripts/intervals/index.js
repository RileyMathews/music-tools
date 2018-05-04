//index js file for intervals directory
//function to call the intervals tool page
const buildIntervalTools = () => {
    const fragment = document.createDocumentFragment()
    const placeholderHeader = document.createElement("h1")
    placeholderHeader.textContent = "Interval Tools"
    fragment.appendChild(placeholderHeader)
    return fragment
}

module.exports = buildIntervalTools