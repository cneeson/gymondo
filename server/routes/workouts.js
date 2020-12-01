const express = require('express');
const router = express.Router();
const sendWorkouts = require('../services/workouts');

/* GET workouts. */
router.get('/', function(_, res) {
  res.setHeader('Content-Type', 'application/json');
  sendWorkouts(res);
});

module.exports = router;
