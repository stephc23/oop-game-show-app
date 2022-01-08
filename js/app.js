/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const keyboardDiv = document.querySelector('#qwerty');
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', () => {
    const game = new Game();
    game.startGame();
});

keyboardDiv.addEventListener('click', event => {
    game.handleInteraction(event);
});