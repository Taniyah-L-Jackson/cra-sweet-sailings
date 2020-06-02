const daoClass = require('../../dao/CardDao');
//connecting to the dao file that containns the sql

const dao = new daoClass();
const express = require('express');
const router = express.Router();

//new card
router.post('/create', (req, res) => {
    // console.log('here')
    dao.newCardInfo(req, res)
})

module.exports = router;