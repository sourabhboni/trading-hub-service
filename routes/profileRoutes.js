const express = require('express');
const { createProfile, addConnection, postJob } = require('../controllers/profileController');

const router = express.Router();

// Route to create a new profile
router.post('/create', createProfile);

// Route to add a connection
router.post('/connect', addConnection);

// Route to post a job
router.post('/post-job', postJob);

module.exports = router;
