const daoClass = require('../../dao/SweetDao');
//connecting to the dao file that containns the sql

const dao = new daoClass();
const express = require('express');
const router = express.Router();

//refers to /api/sweets/product_list
router.get('/', (req, res) => {
    dao.findAllProducts(req, res);
});

//different types of products available

//specific types
router.get('/types/:type', (req, res) => {
    let type = req.params.type
    dao.findByType(req, res, type);
});

//specific item
router.get('/id/:id', (req, res) => {
    let id = req.params.id
    dao.findById(req, res, id);
});

module.exports = router;