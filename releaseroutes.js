const express = require('express');
const router = express.Router();
const { getReleaseData } = require('../controllers/releaseController');
 
router.get('/release', getReleaseData);
 
module.exports = router;
