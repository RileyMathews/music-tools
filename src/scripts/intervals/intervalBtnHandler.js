//app to handle click event on the submit button of interval page
const componentFactory = require("../ComponentFactory")
const nukeHTML = require("../nukeHTML")
const calculateInterval = require("./intervalsLogic")

const activateSubmitButton = () => {
    $("#intervals__submit").on("click", () => {
        const note1 = $("#intervals__select__noteOne").val()
        const note2 = $("#intervals__select__noteTwo").val()
        if (note1 !== null && note2 !== null) {
            const interval = calculateInterval(note1, note2)
            //put results of interval calculation into the dom
            nukeHTML("#intervals__output")
            $("#intervals__output").append(componentFactory("p", `The Interval is: ${interval}`))
        } else {
            $("#interval--alert").slideDown(300).delay(2000).slideUp(300)
        }

    })
}

module.exports = activateSubmitButton