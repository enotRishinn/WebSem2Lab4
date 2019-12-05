const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

const cityScheme = mongoose.Schema({
    city: String
});
const City = mongoose.model("City", cityScheme);

module.exports = function(app) {

  app.get('/favorites', async (req, res) => {
    await City.find({}, function(err, docs){
        if(err) {
          res.send({ message: err });
        } else {
          res.send(docs);
        }
    });
  });


  app.post('/favorites', async (req, res) => {
    const cityName = req.query.city;
    const city = new City({
      city: cityName
    });

    await city.save(function(err){
        if(err) {
          res.send({ message: err });
        } else {
          res.send(city);
        }
    });
  });


  app.delete('/favorites', async (req, res) => {
    const cityName = req.query.city;

    await City.findOneAndDelete({city: cityName}, function(err, doc){
        if(err) {
          res.send({ message: err });
        } else {
          res.send(doc);
        }
    });
  });
};
