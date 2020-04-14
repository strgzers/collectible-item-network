const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const ItemID = req.body.ItemID;
    const ItemName = req.body.ItemName;
    const Price = Number(req.body.Price);
    const SellerID = req.body.model;
    const SaleNum = Number(req.body.SaleNum);

    const newItem = new Item({
        ItemID,
        ItemName,
        Price,
        SellerID,
        SaleNum,
    });

    newItem.save()
        .then(() => res.json('Item added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.username = req.body.username;
            item.name = req.body.name;
            item.description = req.body.description;
            item.model = req.body.model;
            item.year = Number(req.body.year);

            item.save()
                .then(() => res.json('Item updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;