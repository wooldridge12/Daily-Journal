
//  check import, it may be wrong
import{ DailyJournal } from "./DailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal
}

