import Card from "./card";
export default class Deck {
  constructor (withFullDeck) {
    if (withFullDeck) {
      this.cards = this.generateFullDeck();
    } else {
      this.cards = []
    }
  }

  generateFullDeck() {
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

  shuffleDraw() {
    return this.draw(this.randomCardIdx())
  }

  drawTop() {
    return this.draw(this.cards.length - 1)
  }

  addTop(cards) {
    this.cards = this.cards.concat(cards)
  }

  addBottom(cards) {
    this.cards = cards.concat(this.cards)
  }

  draw(index) {
    return this.cards.splice(index, 1);
  }

  empty() {
    return this.cards.length === 0
  }
}

