
export const JournalForm = () => {
    return `
    <h1 class="dailyJournalHeader">DAILY JOURNAL</h1>
    <h2 class="myName">Michael Wooldridge</h2>
    <section class="boxes">
        <form action="">
            <fieldset class="flexbox">
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
        </form>
        <form action="">
            <fieldset class="flexbox">
                <label for="conceptsCovered">Concepts Covered</label>
                <input type="text" name="conceptsCovered">
            </fieldset>
        </form>
        <form action="">
            <fieldset class="flexbox">
                <label for="journalEntry">Journal Entry</label>
                <div class="textDiv">
                    <textarea class="makeBigBox"></textarea>
                </div>
            </fieldset>
        </form>
        <form action="">
            <fieldset class="flexbox">
                <label for="mood">Mood</label>
                <select class="dropdown">
                    <div id="moodDropDown" class="dropDownContent">
                    <option value="happy">Happy</option>
                    <option value="ok">Ok</option>
                    <option value="confused">Confused</option>
                    <option value="mad">Mad</option>
                    <option value=sad>Sad</option>
                    </div>
                    </select>
            </fieldset>
        </form>
        <article id="entries"></article>
    </section>
    <button id="submitNotes" class="recordButton">Record Journal Entry</button>
    `
}