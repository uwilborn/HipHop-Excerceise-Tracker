var router = require("express").Router()
var db = require("../models/exercise")

router.get('/api/workouts',function(req,res){
    db.find({})
    .then(dbrecords=>{
        console.log("GET",dbrecords)
        res.json(dbrecords)
    })
});

router.put('/api/workouts/:id',function(req,res){
    db.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}},
        {new:true})
    .then(dbrecords=>{
        console.log("PUT",dbrecords)
        res.json(dbrecords)
    })
});

router.post('/api/workouts',function(req,res){
    db.create(req.body)
    .then(dbrecords=>{
        console.log("POST",dbrecords)
        res.json(dbrecords)
    })
});

router.get('/api/workouts/range',function(req,res){
    db.find({}).limit(15)
    .then(dbrecords=>{
        console.log("GET",dbrecords)
        res.json(dbrecords)
    })
});

module.exports = router;