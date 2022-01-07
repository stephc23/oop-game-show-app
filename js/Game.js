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
}