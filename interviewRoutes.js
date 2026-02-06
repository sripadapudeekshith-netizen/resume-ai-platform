const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

// Interview routes
router.post('/start', interviewController.startInterview);
router.post('/answer', interviewController.submitAnswer);
router.get('/feedback/:sessionId', interviewController.getFeedback);

module.exports = router;
