const express = require('express');
const router  = express.Router();

const mysqlConnection  = require('../database.js');

//Get All Invoices
router.get('/invoices', (req, res ) =>{
    mysqlConnection.query('select * from northwind.invoices', (err, rows, fields) =>{
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;