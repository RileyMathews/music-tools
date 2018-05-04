//app to handle click event on the submit button of interval page
const componentFactory = require("../ComponentFactory")
const nukeHTML = require("../nukeHTML")
const calculateInterval = require("./intervalsLogic")

const activateSubmitButton = () => {
    $("#intervals__submit").on("click", () => {

        const interval = calculateInterval($("#intervals__select__noteOne").val(), $("#intervals__select__noteTwo").val())
        //put results of interval calculation into the dom
        nukeHTML("#intervals__output")
        $("#intervals__output").append(componentFactory("p", `The Interval is: ${interval}`))
    })
}

module.exports = activateSubmitButton