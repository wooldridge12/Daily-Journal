import { fetchEntries } from "./database.js"

import { DailyJournal } from "./DailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    fetchEntries().then(
        () => {
    container.innerHTML = DailyJournal()

         } ) }


render()

container.addEventListener(
    "stateChanged",
    event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

