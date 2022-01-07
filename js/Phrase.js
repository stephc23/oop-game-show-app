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
        for (let char of this.phrase) {
            const characterLi = document.createElement('li');
            const phraseDiv = document.querySelector('#phrase');
            phraseDiv.firstElementChild.appendChild(characterLi);

            if (char = ' ') {
                characterLi.setAttribute('class', 'space');
            } else {
                characterLi.setAttribute('class', `hide letter ${char}`);
            }
        } 
    }
}