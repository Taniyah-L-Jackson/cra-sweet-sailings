const express = require('express');
const router = express.Router();
//using express for simplicity in code, rather than just using node

//uses the sweets file containing the main & side routes 
//using the sweets database in reference to these routes
router.use('/product_list', require('./api/sweetRoutes'));
router.use('/card_info', require('./api/cardRoutes'));
router.use('/person_info', require('./api/personRoutes'));

module.exports = router;

//Route chaining (Using the express built-in method)
//this allows multiple routes for the api
//this is the router.use file