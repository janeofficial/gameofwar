import Deck from './deck'
export default class Player {
  constructor () {
    // player1, player2

    this.deck = new Deck();
  }

  addCards(cardsArray) {
    this.deck.addBottom(cardsArray)
  }

  lost() {
    // player has no cards left - loser
    return this.deck.empty()
  }

  play() {
  // pulling top card off the deck and returning it in an array
    return this.deck.drawTop()
  }
}
