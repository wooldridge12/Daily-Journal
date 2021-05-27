import { getJournalEntries, } from "./database.js"
 
export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""

    for (const entry of entries) {
        allEntriesAsHTML += `<div>${entry.entry}</div>`
    }
    return allEntriesAsHTML
}


