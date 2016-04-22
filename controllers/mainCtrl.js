var names = require('../models/names.js')
var occupations = require('../models/occupations.js')
var location = require('../models/location.js')
var hobbies = require('../models/hobbies.js')
var skills = require('../models/skills.js')

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(names);
  },

  getLocation: function(req, res, next) {
    res.status(200).json(location);
  },

  getOccupations: function(req, res, next) {
    // var alphaDes = req.query.occupations.sort();
    res.status(200).json(occupations);
  },

  getOccupationsLatest: function(req, res, next) {
    res.status(200).json(occupationsLatest);
  },

  getHobbies: function(req, res, next) {
    res.status(200).json(hobbies);
  },

  getHobbiesType: function(req, res, next) {
    res.status(200).json(hobbiesType);
  },

  createName: function(req, res, next) {
    names.push(req.body);
    res.status(200).json(names);
  },

  updateName: function(req, res, next) {
    var index = parseInt(req.params.id);
    names[index] = req.body;
    res.status(200).json(names[index]);
  },

  updateLocation: function(req, res, next) {
    var index = parseInt(req.params.id);
    location[index] = req.body;
    res.status(200).json(location[index]);
  },

  createHobbies: function(req, res, next) {
    hobbies.push(req.body);
    res.status(200).json(hobbies);
  },

  createOccupations: function(req, res, next) {
    occupations.push(req.body);
    res.status(200).json(occupations);
  },

  getSkills: function(req, res, next) {
    var experience = req.query.experience;
    if (experience) {
      var result = skills.filter(function(skill) {
        return skill.experience === experience;
      });
      res.status(200).json(result);
    } else {
      res.status(200).json(skills);
    }
  }



}
