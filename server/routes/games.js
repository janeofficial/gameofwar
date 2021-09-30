import Deck from '../models/deck'
import express from 'express';
import WarGame from '../models/wargame';
import { getWins } from '../database'
let router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const wargame = new WarGame()
  wargame.startGame()
  res.json({
    wargame,
    message: wargame.handleWin()
  })
})

router.get('/wins', function(req, res, next) {
  const wins = getWins()
  res.send(wins)
})
export default router;
