// countyRoutes.js
const express = require('express');
const { addCounty } = require('../controllers/countyController');
const router = express.Router();

router.post('/county', addCounty);  // POST endpoint to add a county

module.exports = router;

