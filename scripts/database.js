
const database = {
    entries: [],
    customEntry: {
        id: 1,
        date: "April, 16, 2021",
        concept: "terminology of javaScript",
        entry: "It's alot to remember i need to study all of these concepts.",
        mood: "okay"
    },
}


const API = "http://localhost:8088"

export const fetchEntries = () => {
    return fetch(`${API}/entries`)
    .then(response => response.json())
    .then(
        (entries) => { database.entries = entries
        })
    }

    export const saveentryToAPI = () => {
        console.log(database.customEntry)
    }
    export const setDate = (date) => {
        database.customEntry.date = date
    }
    export const setConcept = (concept) => {
        database.customEntry.concept = concept
    }
    export const setEntry = (entry) => {
        database.customEntry.entry = entry
    }
    export const setMood = (mood) => {
        database.customEntry.mood = mood
    }
    
    const mainContainer = document.querySelector("#entries")
    
    export const sendEntry = (Myentries) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Myentries)
        }
        
        
        return fetch(`${API}/entries`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new  CustomEvent("stateChanged"))
        })
    }
    
    
    export const getJournalEntries = () => {
        return [...database.entries]
    }