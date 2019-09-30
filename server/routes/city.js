var express = require('express');
var router = express.Router();
const City = require('./../models/city')
const https = require("https");
const location = require('./../zomatoAPI/locations');
const restaurentByCity = require('./../zomatoAPI/restaurentByCity');

router.post('/', (req, res, next)=>{
    const city = new City({
        name: req.body.city_name
      });

      city.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
})

router.get('/', (req, res)=>{
    City.find()
    .then(city => {
        res.send(city);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
})

router.get('/restaurant', async (req, res) =>{
    var locationInformation = await location(req.query.cname);
    var restaurantInformation = await restaurentByCity(req.query.cname);
    res.status(200).send(restaurantInformation);
})

module.exports = router;
