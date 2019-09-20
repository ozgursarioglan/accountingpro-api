const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Products
router.get('/products', (req, res) => {
    mysqlConnection.query('SELECT * FROM northwind.products', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//GET totalOrderProducts
router.get('/products/totalOrderProducts', (req, res) =>{
    mysqlConnection.query('SELECT * FROM northwind.product_total_orders', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;