const router = require('express').Router();
const User = require('../models/User');


router.get("/",function(req,res){
    User.find()
.then(users => res.json(users))
.catch(err => res.status(400).json('Error: ' + err));
});

router.post("/add",function(req,res){
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;

