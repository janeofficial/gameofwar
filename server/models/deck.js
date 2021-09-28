export default class Deck {
  constructor () {
    this.cards = this.generate();
  }

  generate() {
   // Generates a deck of Cards - deck has 4 suits, each suit has 13 cards
   let suitArr = ["Heart", "Club", "Spade", "Diamond"];
   let cardArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

   return suitArr.flatMap(suit => cardArr.map(number => {
     return new Card(suit, number)
   }));
  }

  randomCardIdx() {
    return Math.floor(Math.random() * (this.cards.length)); // picking a random num between 0 and length of the deck
  }
  draw() {
    return this.cards.splice(this.randomCardIdx(), 1); // -> removes Card from this.deck and returns [Card]
  }
}

