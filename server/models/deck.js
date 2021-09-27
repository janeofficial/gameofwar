export default class Deck {
  constructor () {
    this.cards = this.generate();
  }

  generate() {
   // Generate a deck of Cards - deck has 4 suits, each suit has 13 cards
   let suitArr = ["Heart", "Club", "Spade", "Diamond"];
   let cardArr = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

   return suitArr.flatMap(d => cardArr.map(v => d + v));
  }

  randomCardIdx() {
    return Math.floor(Math.random() * (this.cards.length));
  }
  draw() {
    return this.cards.splice(this.randomCardIdx(), 1);
  }
}

