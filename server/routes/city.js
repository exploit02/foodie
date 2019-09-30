var express = require('express');
var router = express.Router();
const City = require('./../models/city')

router.get('/', (req, res)=>{
    res.send('HI...........!');
})

module.exports = router;
