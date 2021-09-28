export default class Card {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
  }

  compare (card) {
    if (this.number > card.number) return "higher"
    if (this.number < card.number) return "lower"
    if (this.number === card.number) return "equal"
  }
  }

