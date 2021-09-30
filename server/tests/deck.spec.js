var assert = require('assert');
import Deck from '../models/deck'
import Card from '../models/card'

it('should be able to test', function() {
  assert.equal(true, true)
})

describe('generateFullDeck', function (){
  it('should generate a 52 card deck', function (){
    const deck = new Deck(true)
    deck.generateFullDeck()
    assert.equal(deck.cards.length, 52)
  })
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

