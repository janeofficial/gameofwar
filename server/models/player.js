export default class Player {
  constructor () {
    this.deck = [];

  }
  addCards(cardsArray) {
    this.deck = cardsArray.concat(this.deck)
  }
  lost() {
    // player has no cards left - loser
    return this.deck.length === 0
  }

  play() {
  // pulling top card off the deck and returning it in an array
    return this.deck.splice(this.deck.length - 1, 1)
  }
}
