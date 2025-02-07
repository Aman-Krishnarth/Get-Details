const express = require('express');
const { createDetails, getDetails } = require('../controllers/detailsController');

const router = express.Router();

router.post("/",createDetails)
router.get("/",getDetails);

module.exports = router;