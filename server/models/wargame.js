import Deck from "./deck";
import Player from './player'
export default class WarGame {
  constructor (player1 = new Player("Player 1", 1), player2 = new Player("Player 2", 2)) {
    this.winner = null;
    this.pile = new Deck();
    this.playCount = 0;

    this.players = [player1, player2]
    this.deal(new Deck(true))
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
      // array, first player's card at 0, second players card at 1
      const cardsToCompare = this.getPlayerCards()
      const card1 = cardsToCompare[0]
      const card2 = cardsToCompare[1]

      const player1 = this.players[0]
      const player2 = this.players[1]

      const result = card1.compare(card2)
      switch(result) {
        case 'higher':
          player1.addCards(cardsToCompare)
          player1.addCards(this.pile.getAllCards())
          break
        case 'lower':
          player2.addCards(cardsToCompare)
          player2.addCards(this.pile.getAllCards())
          break
        case 'equal':
          this.burnCards()
          // adding cards we compared to the pile
          this.pile.addTop(cardsToCompare)
          break
      }
    } // calling methods in a class definition requires the this keyword!!!
    this.handleWin()
  }

  burnCards() {
    // adding two cards to the pile w/o comparison
    this.players.forEach((player, index)=> {
      const card = player.play()
      this.pile.addTop(card)
    })
  }

  getPlayerCards() {
    // return an array of cards
    return this.players.map((player)=> {
      // returns the card
      return player.play()[0]
    })
  }

  gameOver() {
    if (this.playCount > 100000) return 'draw'
    this.playCount++
    const losingPlayer = this.players.find((player) => {
      return player.lost()
    })
    return losingPlayer;
  }

  handleWin() {
    if (this.gameOver() === 'draw') return 'The players got tired of playing'
    const [player1, player2] = this.players
    if (player1.lost()) {
      this.winner = player2
      return `${player2.name} has won the game!`
    } if (player2.lost()) {
      this.winner = player1
      return `${player1.name} has won the game!`
    }
  }

}
