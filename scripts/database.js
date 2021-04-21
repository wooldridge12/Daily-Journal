const database = {
    "entries": [
        {
            id: 1,
            date: "April, 16, 2021",
            concept: "terminology of javaScript",
            entry: "It's alot to remember i need to study all of these concepts.",
            mood: "okay"
        },
        {
            id: 2,
            date: "April, 16, 2021",
            concept: "basic array of objects",
            entry: "I feel like this couse was very straight forward. I took alot of notes though.",
            mood: "good"
        },
        {
            id: 3,
            date: "April, 17, 2021",
            consept: "push method",
            entry: "This method seems very simple. I really feel good about it.",
            mood: "good"
        },
        {
            id: 4,
            date:"April, 19, 2021",
            concept:"proper adding",
            entry:"This is alot of steps happening at once. I still have to look over past code to remember it. This has been the most difficult thing so far. I feel I spent so much time on this I fell behind most of my peers.",
            mood:"sad"
        }
    ]
}
// export= pulling out data, const = varibal, getJournalEntries= function
export const getJournalEntries = () => {
    // copying data put into my boxes
    const copyOfData = [...database.entries]
    // returning data to me from my boxes
    return copyOfData
}
export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then()
    .then(entries => {


    })
}