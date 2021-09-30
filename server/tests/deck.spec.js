import assert from 'assert'
import Deck from '../models/deck'

describe('Deck',function(){
  it('should default to creating an empty deck', function() {
    const deck = new Deck()
    assert.equal(deck.empty(), true)
  })

  it('should generate a 52 card deck with a true argument', function (){
    const deck = new Deck(true)
    assert.equal(deck.cards.length, 52)
  })

  describe('draw', function (){
    it('should return a single card in an array', function(){
      const deck = new Deck(true)
      const result = deck.draw()
      assert.equal(typeof result[0], 'object')
      assert.equal(result.length, 1)
    })
    it('should remove that card from the deck', function (){
      const deck = new Deck(true)
      const result = deck.draw()
      assert.equal(deck.cards.length, 51)
    })
  })

  describe('getAllCards', function (){
    it('should delete all cards from the deck', function(){
      const deck = new Deck(true)
      const result = deck.getAllCards()
      assert.equal(deck.cards.length, 0)
    })
    it('should return all the cards in the deck', function(){
      const deck = new Deck(true)
      const result = deck.getAllCards()
      assert.equal(result.length, 52)
    })
  })
})


