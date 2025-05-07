// routes/femicideRoutes.js
const express = require('express');
const { getFemicides, addFemicide, getMetadata } = require('../controllers/femicideController');

const router = express.Router();

// GET all femicides
router.get('/femicides', getFemicides);

// POST a new femicide
router.post('/femicides', addFemicide); 
 // <-- Add this route for posting femicides

// GET metadata (if needed)
router.get('/metadata', getMetadata);

module.exports = router;

