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
            characterLi.textContent = char;

            if (char === ' ') {
                characterLi.classList.add('space');
            } else {
                characterLi.classList.add('hide', 'letter', `${char}`);
            }
        } 
    }

    /**
     * Checks if the letter selected by the player is in the phrase.
     * @param {string} selectedLetter - The letter selected by the player.
     * @returns {boolean} True if the phrase includes the selected letter; false if it does not.
     */
    checkLetter(selectedLetter) {
        return this.phrase.includes(selectedLetter);
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

    /**
     * Removes all letter elements from the display.
     */
    removePhraseFromDisplay() {
        const phraseUl = document.querySelector('#phrase').firstElementChild;
        phraseUl.textContent = '';
    }
}