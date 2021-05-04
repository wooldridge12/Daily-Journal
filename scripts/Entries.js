 //  check import, it may be wrong
 import { getEntries } from "./database.js"

export const Entries = () => {
    const entries = getEntries()
    const allEntriesAsHTML = ""

    for (const entry of entries) {
        allEntriesAsHTML += `
        Replace this with your HTML representation of a journal entry.
        `
    }
    return allEntriesAsHTML
}
