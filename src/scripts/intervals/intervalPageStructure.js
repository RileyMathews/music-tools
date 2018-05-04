//function to create basic structure for the interval tools page
const ComponentFactory = require("../ComponentFactory")
const notes = require("../notesDB")

const buildIntervalPageStructure = () => {
    const section = ComponentFactory("section", null, "main__intervals")
    section.appendChild(ComponentFactory("h1", "Interval Tool"))
    const selectNoteOne = (ComponentFactory("select", null, null, "intervals__select__noteOne"))
    const selectNoteTwo = (ComponentFactory("select", null, null, "intervals__select__noteTwo"))
    notes.forEach(note => {
        const optionOne = (ComponentFactory("option", note))
        optionOne.setAttribute("value", notes.indexOf(note))
        selectNoteOne.appendChild(optionOne)
        const optionTwo = (ComponentFactory("option", note))
        optionTwo.setAttribute("value", notes.indexOf(note))
        selectNoteTwo.appendChild(optionTwo)
    })
    section.appendChild(selectNoteOne)
    section.appendChild(selectNoteTwo)

    section.appendChild(ComponentFactory("button", "Get Interval", "btn--primary", "intervals__submit"))
    section.appendChild(ComponentFactory("section", null, null, "intervals__output"))

    return section
}

module.exports = buildIntervalPageStructure