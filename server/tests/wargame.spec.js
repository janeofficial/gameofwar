import assert from 'assert'
import WarGame from '../models/wargame'

describe('WarGame', function(){
  it('generates two players by default', function(){
    const wargame = new WarGame()
    assert.equal(wargame.players.length, 2)
  })

  describe('startGame', function(){
    it('sets a winner on the game class', function (){
      const wargame = new WarGame()
      wargame.startGame()
      if(wargame.gameOver() === "draw"){
        assert.equal(wargame.winner, null)
      } else {
        assert.equal(typeof wargame.winner.name, "string")
      }
    })
  })
})
