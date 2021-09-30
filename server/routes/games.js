import Deck from '../models/deck'
import express from 'express';
import WarGame from '../models/wargame';
import client from '../database'
let router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {
  const wargame = new WarGame()
  wargame.startGame()
  if (wargame.winner) {
    const winnerId = wargame.winner.id
    await client.query(`INSERT INTO wins (player_id) VALUES (${winnerId})`)
  }
  res.json({
    message: wargame.handleWin()
  })
})

router.get('/wins', async function(req, res, next) {
  const { rows } = await client.query(`SELECT count(*), player_id from wins GROUP BY player_id;`)
  res.json(rows)
})

export default router;
