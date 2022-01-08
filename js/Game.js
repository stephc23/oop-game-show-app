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
        if (event.target.tagName === 'BUTTON') {
            const keyButton = event.target;
            const selectedLetter = keyButton.textContent;
            const isInPhrase = this.activePhrase.checkLetter(selectedLetter);
    
            keyButton.disabled = true;
    
            if (isInPhrase) {
                keyButton.classList.add('chosen');
                this.activePhrase.showMatchedLetter(selectedLetter);
    
                const hasWon = this.checkForWin();
                if (hasWon) {
                    this.gameOver('win');
                }
            } else {
                keyButton.classList.add('wrong');
                this.removeLife();
            }  
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
            this.gameOver('lose');
        }
    }

    /**
     * Checks if all of the letters in the active phrase have been revealed.
     * @returns {boolean} True if all letters have been revealed, and false if not.
     */    
    checkForWin() {
        const phraseDiv = document.querySelector('#phrase');
        const characterLis = phraseDiv.firstElementChild.children;
        let numLettersShown = 0;

        for (const li of characterLis) {
            if (li.classList.contains('letter')) {
                if (li.classList.contains('show')) {
                    numLettersShown += 1;
                }
            }
        }
        
        const phraseNoSpaces = this.activePhrase.phrase.replaceAll(' ', '');
        return numLettersShown === phraseNoSpaces.length; 
    }

    /**
     * Displays overlay with game over message, depending on outcome.
     * @param {string} outcome - 'win' or 'lose' 
     */
    gameOver(outcome) {
        const overlayDiv = document.querySelector('#overlay');
        const messageH1 = overlayDiv.children[1];

        overlayDiv.style.display = 'block';
        
        if (outcome === 'win') {
            messageH1.textContent = 'Congratulations! You\'ve guessed the phrase!';
            overlayDiv.className = 'win';
        } else {
            messageH1.textContent = 'Sorry. You\'ve run out of guesses.';
            overlayDiv.className = 'lose';
        }
    }

    /**
     * Enables all keyboard buttons and resets their classnames.
     */
    resetKeyButtons() {
        const keyboardDiv = document.querySelector('#qwerty');
        const keyrowDivs = keyboardDivs.children;

        for (const div of keyrowDivs) {
            keyButtons = div.children;
            for (const keyButton of keyButtons) {
                keyButton.disabled = false;
                keyButton.className = 'key';
            }
        }
    }

    /**
     * Resets all heart images in the scoreboard to the liveheart.png image.
     */
    resetLives() {
        const scoreboardDiv = document.querySelector('#scoreboard');
        const heartLis = scoreboardDiv.firstElementChild.children;

        for (const li of heartLis) {
            const img = li.firstElementChild;
            if (img.src === 'images/lostHeart.png') {
                img.setAttribute('src', 'images/liveHeart.png');
            }
        }
    }

    /**
     * Resets the gameboard before a new game.
     */
    resetGameboard() {
        this.activePhrase.removePhraseFromDisplay();
        this.resetKeyButtons();
        this.resetLives();
    }
}