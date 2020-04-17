const router = require('express').Router();
let Market = require('../models/market.model');

router.route('/').get((req, res) =>
{
    Market.find()
        .then(markets => res.json(markets))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) =>
{
    const ItemID = req.body.ItemID;
    const ItemName = req.body.ItemName;
    const URL = req.body.URL;
    const Description = req.body.Description;

    const newMarket = new Market(
        {
            ItemID,
            ItemName,
            URL,
            Description,
        });

    newMarket.save()
        .then(() => res.json('Market added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;


