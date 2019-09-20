const express = require('express');
const router =  express.Router();

const mysqlConnection  = require('../database.js');

//Get All Customers
router.get('/customers', (req, res ) =>{
    mysqlConnection.query('SELECT * FROM northwind.customers', (err, rows, fields)=>{
       if(!err){
           res.json(rows);
           console.log("All customers listed")
       }else{
           console.log(err);
       }
   });
});

//Get A customer
router.get('/customers/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM northwind.customers where id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
            console.log("A customer is listed")
        } else {
            console.log(err);
        }
    });
});

//Insert Customer
router.post('/customers', (req, res ) =>{
  const  { company } = req.body;
    mysqlConnection.query('INSERT INTO northwind.customers set ?', { company }, (err, rows, fields)=>{
        if(!err){
            res.json(rows);
            console.log("Added a customer")
        }else{
            console.log(err);
        }
    });
});

//Update Customer
router.post('/customers/:id', (req, res) => {
    const { id } = req.params;
    const  company  = req.body;
    mysqlConnection.query('UPDATE northwind.customers SET ? WHERE id = ?', [company, id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
            console.log("A customer has been updated")
        } else {
            console.log(err);
        }
    });
});


//Delete Customer
router.delete('/customers/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM northwind.customers WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
            console.log(res.status())

        } else {
            console.log(err);
            res.status(err.statusCode || 500).json(err);
        }
    });
});

module.exports = router;