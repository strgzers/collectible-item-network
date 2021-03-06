const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>
{
    const userID = req.body.userID;
    const password = req.body.password;
    const role = req.body.role;
    const shippingAddress = req.body.shippingAddress;

    const newUser = new User(
        {
            userID,
            password,
            role,
            shippingAddress,
        });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;