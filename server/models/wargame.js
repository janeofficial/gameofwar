import Deck from "./deck";
import Player from './player'
export default class WarGame {
  constructor (player1 = new Player(), player2 = new Player()) {
    this.stack = [];
    this.players = [player1, player2]
    this.deal(new Deck());
  }

  deal (deck) {
    for(let i = 0; i < 27; i++) {
      this.players.forEach((player) => {
         // for each player, draw one card, and add to the bottom of the players deck
        const draw = deck.draw();
        player.addCards(draw)
      })
    }
  }

  startGame() { // starts the game loop
    while(!this.gameOver()) {
      // once players have cards in their playstack, examine the card value [10Heart]
      // if first part of the card value is ace || 2, we can assume its the smaller card
    }
  }

  gameOver() {
    const losingPlayer = this.players.find((player) => {
      return player.lost()
    })
    return losingPlayer;
  }

  compare() { // P1 playstack points vs. P2 points

  }

}
