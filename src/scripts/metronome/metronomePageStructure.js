//app to create metronome page structure
const ComponentFactory = require("../ComponentFactory")

const buildMetronomePage = () => {
    const fragment = document.createDocumentFragment()

    const section = ComponentFactory("section", null, "metronome")

    section.appendChild(ComponentFactory("h1", "metronome"))
    section.appendChild(ComponentFactory("p", "enter a desired bpm and hit play"))
    const bpm = ComponentFactory("input", "BPM", "input", "metronome__bpm")
    bpm.setAttribute("placeholder", "BPM")
    bpm.setAttribute("type", "number")
    section.appendChild(bpm)
    section.appendChild(ComponentFactory("button", "play", "btn btn-primary", "metronome__start"))
    const alert = ComponentFactory("div", "please enter a valid number", "alert alert-warning alert-dismissible fade show", "metronome--alert")
    alert.setAttribute("role", "alert")
    section.appendChild(alert)
    return section
}

module.exports = buildMetronomePage