 
//  check import, it may be wrong
 import { database } from "./database.js"

export const Entries = () => {
    const entries = database
    const allEntriesAsHTML = ""

    for (const entry of entries) {
        allEntriesAsHTML += `
        Replace this with your HTML representation of a journal entry.
        `
    }
    return allEntriesAsHTML
}
