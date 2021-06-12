const express = require('express');

const router = express.Router();

const investorController = require('../controllers/investorController');
const bodyParser = require('body-parser');

 


router.post('/stock_watchlist', investorController.addStock, (req, res) => {
  res.status(200).json({ message: 'Successfully added the stock to watchlist' })
  
});
router.get('/stockDetails',investorController.getStock, (req, res) => {
   res.status(200).json(res.locals.data)
});
  










module.exports = router;