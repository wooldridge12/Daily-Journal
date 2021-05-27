import { sendEntry } from "./database.js"
import { Entries } from "./Entries.js"
import { JournalForm } from "./JournalForm.js"




const mainContainer = document.querySelector("#entries")


mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "submitNotes") {
            const journalDate = document.querySelector("input[type='date']").value
            const journalConcept = document.querySelector("input[name='conceptsCovered']").value
            const journalEntry = document.querySelector("textarea[class='makeBigBox']").value

            const dataToAPI = {
                date: journalDate,
                concept: journalConcept,
                entry: journalEntry,
            }
            sendEntry(dataToAPI)
        }
    }
)


export const DailyJournal = () => {
    return `
        <article class="entryForm">
        ${ JournalForm() }
        </article>
        <div class="entryList">
            ${ Entries() }
        </div>
        `
}


