
//  check import, it may be wrong
import { JournalForm } from "./JournalForm.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = JournalForm()
}

render()

document.addEventListener("stateChanged",event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

