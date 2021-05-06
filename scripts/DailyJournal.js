
//  check import, it may be wrong
import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"
import { addCustomOrder } from "./database.js"







document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "recordItems") {
            addCustomOrder()
        }
    }
)


export const DailyJournal = () => {
    return `
        <h1>Daily Journal</h1>

        <div class="entryList">
            ${ Entries() }
        </div>
        <article class="entryForm">
            ${ JournalForm() }
        </article>
        `
}


