class Deck {
  constructor () {
    this.cards = [];
  }

  generate() {
   // Generate a deck of Cards - deck has 4 suits, each suit has 13 cards
   suitArr = ["Heart", "Club", "Spade", "Diamond"];
   cardArr = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

   console.log(suitArr.flatMap(d => cardArr.map(v => d + v)));
  }

  draw() {

  }
}
