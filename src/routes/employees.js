const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM northwind.employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// GET An Employees
router.get('/employees/:id',(req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM northwind.employees where id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;