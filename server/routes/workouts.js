const express = require('express');
const router = express.Router();
const { get, getIndex } = require('../services/workouts');

const sanitiseArrayParam = (param) => param && param.split(',');

/* GET workouts. */
router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  getIndex(res, { 
    page: req.param('page') || 0,
    size: req.param('size') || 10,
    month: req.param('month') || null,
    categories: sanitiseArrayParam(req.param('categories')) || null
  });
});

/* GET workouts/:id. */
router.get('/:id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  get(res, req.param('id'));
});

module.exports = router;
