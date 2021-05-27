import { getJournalEntries, } from "./database.js"
 
export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = "";

    for (const entry of entries) {
        allEntriesAsHTML += `
        <div class="wholeBox">
        <div class="noteConcepts">${entry.concept}</div>
        <div class="noteBook">${entry.entry}</div>
        <div class="noteBook">${entry.date}</div>
        <div class="noteBook">${entry.mood}</div>
        </div>
        `
    }
    allEntriesAsHTML += "</div>"

    return allEntriesAsHTML
}


