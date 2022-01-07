/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Happy Holidays'),
            new Phrase('Merry Christmas'),
            new Phrase('Happy New Year'),
            new Phrase('Let it snow'),
            new Phrase('Jingle bells')
        ];
        this.activePhrase = null;
    }

    /**
     * Hides the start screen overlay, sets the activePhrase property to a random phrase, and adds the phrase to the board.
     */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Randomly retrieves one of the phrases stored in the phrases array.
     * @returns {object} The random Phrase object.
     */
    getRandomPhrase() {
        const randomIndex = Math.ceil(Math.random * 4);
        return this.phrases[randomIndex];
    }

    /**
     * Branches code, depending on if selected letter is in the phrase. Checks if game has been won.
     * @param {object} event - Click event object.
     */
    handleInteraction(event) {
        const keyButton = event.target;
        keyButton.disabled = true;

        const selectedLetter = keyButton.textContent;
        const isInPhrase = this.activePhrase.checkLetter(selectedLetter);
        if (isInPhrase) {
            keyButton.classList.add('chosen');
            this.activePhrase.showMatchedLetter(selectedLetter);

            const hasWon = this.checkForWin();
            if (hasWon) {
                this.gameOver();
            }
        } else {
            keyButton.classList.add('wrong');
            this.removeLife();
        }    
    }

    /**
     * Removes a life from the scoreboard. Ends game if no lives remain.
     */
    removeLife() {
        const scoreboardDiv = document.querySelector('#scoreboard');
        const heartLis = scoreboardDiv.firstElementChild.children;

        for (const li of heartLis) {
            const img = li.firstElementChild;
            if (img.src === 'images/liveHeart.png') {
                img.setAttribute('src', 'images/lostHeart.png');
                break;
            }
        }

        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        }
    }
}