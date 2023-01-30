const path = require('path');
const express = require('express');
const router =  express.Router();

const routeDir = require('../util/path')


router.get('/', (req, res) => {
    //res.send('<h1>Hello from Express</h1>');
    res.sendFile(path.join(routeDir, 'views', 'shop.html'));
 });

 module.exports = router;
