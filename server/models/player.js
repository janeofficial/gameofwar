export default class Player {
  constructor () {
    this.deck = [];
  }
  addCards(cardsArray) {
    this.deck = cardsArray.concat(this.deck)
  }
  playstack() {

  }

}
