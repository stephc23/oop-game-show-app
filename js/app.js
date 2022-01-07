/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

const keyboardDiv = document.querySelector('#qwerty');
keyboardDiv.addEventListener('click', event => {
    game.handleInteraction(event);
});