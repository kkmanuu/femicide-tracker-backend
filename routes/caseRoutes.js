const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const caseController = require('../controllers/caseController');

router.get('/', auth, caseController.getAllCases);
router.post('/', auth, caseController.addCase);

module.exports = router;
