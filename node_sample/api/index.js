const express = require('express');
const router = express.Router();

const controller = require('./root.controller');

router.get('/', controller.index);

module.exports = router;