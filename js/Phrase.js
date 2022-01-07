/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds letter placeholders to the display.
     */
    addPhraseToDisplay() {
        for (const char of this.phrase) {
            const characterLi = document.createElement('li');
            const phraseDiv = document.querySelector('#phrase');
            phraseDiv.firstElementChild.appendChild(characterLi);

            if (char = ' ') {
                characterLi.classList.add('space');
            } else {
                characterLi.classList.add('hide', 'letter', `${char}`);
            }
        } 
    }

    /**
     * Checks if the letter selected by the player matches a letter in the phrase.
     * @param {string} selectedLetter - The letter selected by the player.
     * @returns {boolean} True if the selected letter matches a letter in the phrase; false if it matches no letters.
     */
    checkLetter(selectedLetter) {
        for (const char of this.phrase) {
            if (char === selectedLetter) {
                return true;
            } 
        }
        return false;
    }

    /**
     * Shows letters on the board that matches the player's selected letter.
     * @param {string} matchedLetter - The players selected letter, which matches at least one letter in the phrase.
     */    
    showMatchedLetter(matchedLetter) {
        const letterLis = document.querySelector('#phrase').firstElementChild.children;
        for (const li of letterLis) {
            if (li.classList.contains(matchedLetter)) {
                li.classList.replace('hide', 'show');
            }
        }
    }
}