// const path = require('path');
// const express = require('express');
// const router = require('express').Router();
// const db = require('../conf/index');

// express().use('/static', express.static(path.join(__dirname, '../', 'public')));

// router.use(express.json());

// router.get('/orders', (req, res) => {
//     res.send("Hello");
//     // db.execute('SELECT * FROM orders')
//     //     .then(([orders]) => {
//     //         console.log(orders);
//     //         res.send(users);
//     //     }).catch(err => console.log(err));
// })

// router.get('/orders/:id', (req, res) => {
//     let id = req.params.id;
//     db.execute(('SELECT * FROM orders WHERE id = ?', [id]))
//         .then(([users]) => {
//             console.log(users);
//             res.send(users);
//         }).catch(err => console.log(err));
// })

// router.post('/create-order', (req, res) => {

//     const {
//         price,
//         date,
//         user_id
//     } = req.params.body;

//     db.execute(('INSERT INTO orders (price, date, user_id) VALUES ?', [price, date, user_id]))
//         .then(([users]) => {
//             console.log(users);
//             res.send(users);
//         }).catch(err => console.log(err));
// })

// router.get('/another-route', (req, res) => {
//     // router code here
// })

// module.exports = router;