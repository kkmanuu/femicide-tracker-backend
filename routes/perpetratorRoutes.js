// perpetratorRoutes.js
const express = require('express');
const { addPerpetrator } = require('../controllers/perpetratorController');
const router = express.Router();

router.post('/perpetrator', addPerpetrator);  // POST endpoint to add a perpetrator

module.exports = router;
