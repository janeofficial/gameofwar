import Deck from "./deck";
import Player from './player'
export default class WarGame {
  constructor (player1 = new Player(), player2 = new Player()) {
    this.stacks = {
      0: [],
      1: []
    };

    this.burns = {
      0: [],
      1: []
    }
    this.players = [player1, player2]
    this.deal(new Deck({ fullDeck: true }));
  }

  deal (deck) {
    for(let i = 0; i < 27; i++) {
      this.players.forEach((player) => {
         // for each player, draw one card, and add to the bottom of the players deck
        const draw = deck.shuffleDraw();
        player.addCards(draw)
      })
    }
  }

  startGame() { // starts the game loop
    while(!this.gameOver()) {
      this.normalPlay()
      const stack1 = this.stacks[0]
      const stack2 = this.stack[1]
      const card1 = stack1[stack1.length - 1]
      const card2 = stack2[stack2.length - 1]
      const result = card1.compare(card2)
      switch(result) {
        case 'higher':
          this.players[0].addCards([card1, card2])
          break
        case 'lower':
          this.players[1].addCards([card1, card2])
          break
        case 'equal':
          this.burnCards()
          break
      }
    }
  }

  burnCards() {
    this.players.forEach((player, index)=> {
      const card = player.play()
      this.burns[index].push(card)
    })
  }

  normalPlay() {
    this.players.forEach((player, index)=> {
      const card = player.play()
      this.stacks[index].push(card)
    })
  }

  gameOver() {
    const losingPlayer = this.players.find((player) => {
      return player.lost()
    })
    return losingPlayer;
  }

}
