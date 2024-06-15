const express = require('express');
const router = express.Router();
const { searchData } = require('../Controller/targetController');

router.post('/search', searchData);

module.exports = router;