const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Orders
router.get('/orders', (req, res) => {
    mysqlConnection.query('SELECT * FROM northwind.orders', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


// GET An Order
router.get('/orders/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM northwind.orders where id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


module.exports = router;