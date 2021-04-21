
//  check import, it may be wrong
import { Entries } from "./Entries.js"

export const DailyJournal = () => {
    return `
    <div class="entryList">
        ${ Entries() }
        </div>
        `
}

export const DailyJournal = () => {
    return `
    <h1>Daily Journal</h1>
    
    <div class="entryList"
        ${ Entries() }
        </div>
        
        <article class="entryForm">
        ${database.date}, ${database.concept}, ${database.entry}, ${database.mood}
        </article>
        `
}