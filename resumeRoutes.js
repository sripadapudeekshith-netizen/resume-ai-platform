const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// Resume routes
router.get('/:userId', resumeController.getResume);
router.post('/generate', resumeController.generateResume);
router.post('/analyze', resumeController.analyzeResume);

module.exports = router;
