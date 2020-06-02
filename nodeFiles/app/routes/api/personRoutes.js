const daoClass = require('../../dao/PersonDao');
//connecting to the dao file that containns the sql

const dao = new daoClass();
const express = require('express');
const router = express.Router();

//new person
router.post('/create', (req, res) => {
    dao.newPersonInfo(req, res)
})
module.exports = router;