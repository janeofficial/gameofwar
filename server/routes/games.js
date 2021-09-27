import Deck from '../models/deck'
import express from 'express';
let router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send(new Deck().draw())
})
export default router;
