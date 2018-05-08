//function to create basic structure for the interval tools page
const ComponentFactory = require("../ComponentFactory")
const notes = require("../notesDB")

const buildIntervalPageStructure = () => {
    const $section = $("")


    const section = ComponentFactory("section", null, "main__intervals")
    section.appendChild(ComponentFactory("h1", "Interval Tool"))
    section.appendChild(ComponentFactory("p", "Enter a couple of notes and figure out what the interval between them is"))
    const selectNoteOne = (ComponentFactory("select", null, null, "intervals__select__noteOne"))


    const selectOneDefault = document.createElement("option")
    selectOneDefault.setAttribute("selected", true)
    selectOneDefault.setAttribute("value", "")
    selectOneDefault.setAttribute("disabled", true)
    selectOneDefault.textContent = "bottom note"
    selectNoteOne.appendChild(selectOneDefault)

    const selectNoteTwo = (ComponentFactory("select", null, null, "intervals__select__noteTwo"))

    const selectTwoDefault = document.createElement("option")
    selectTwoDefault.setAttribute("selected", true)
    selectTwoDefault.setAttribute("value", "")
    selectTwoDefault.setAttribute("disabled", true)
    selectTwoDefault.textContent = "top note"
    selectNoteTwo.appendChild(selectTwoDefault)

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

    const submitButton = ComponentFactory("button", "Get Interval", "btn btn-primary", "intervals__submit")
    section.appendChild(submitButton)
    const alert = ComponentFactory("div", "please select both notes", "alert alert-warning alert-dismissible fade show", "interval--alert")
    alert.setAttribute("role", "alert")
    section.appendChild(alert)


    section.appendChild(ComponentFactory("section", null, null, "intervals__output"))
    return section
}

module.exports = buildIntervalPageStructure