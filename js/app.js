/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const keyboardDiv = document.querySelector('#qwerty');
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

keyboardDiv.addEventListener('click', event => {
    game.handleInteraction(event);
});