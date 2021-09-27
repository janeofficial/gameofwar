import Deck from "./deck";
import Player from './player'
export default class WarGame {
  constructor (player1 = new Player(), player2 = new Player()) {

    this.player1 = player1;
    this.player2 = player2;

    this.deck = new Deck();
    for(let i = 0; i < 27; i++) {
      const card1 = this.deck.draw()
      this.player1.addCards(card1)

      const card2 = this.deck.draw()
      this.player2.addCards(card2)
    }

  }

}
