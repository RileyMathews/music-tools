//app to create metronome page structure
const ComponentFactory = require("../ComponentFactory")

const buildMetronomePage = () => {
    const fragment = document.createDocumentFragment()

    const section = ComponentFactory("section", null, "metronome")

    section.appendChild(ComponentFactory("h1", "metronome"))
    section.appendChild(ComponentFactory("button", "play?", "btn-primary", "metronome__start"))
    section.appendChild(ComponentFactory("button", "stop?", "btn-primary", "metronome__stop"))
    return section
}

module.exports = buildMetronomePage