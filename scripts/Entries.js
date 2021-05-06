 
//  check import, it may be wrong
 import { getJournalEntries, setEntry } from "./database.js"


// const entries = getJournalEntries()

    //HELP PLEASE


export const Entries = () => {
    const entries = getJournalEntries()
    const allEntriesAsHTML = ""

    for (const entry of entries) {
        allEntriesAsHTML += `
        Hello
        `
    }
    return allEntriesAsHTML
}


