const express = require('express');
const client = require('../conf/index')
const usersRouter = express.Router();
usersRouter.use(express.json());


usersRouter.get('/api/users', (req, res) => {
    client.query(`SELECT * FROM users`) //
    .then(data => res.json(data.rows))
    .catch(err => res.json(err))
})

usersRouter.get('/api/users/:id', (req, res) => {
    let {id} = req.params
    client.query(`SELECT * FROM users WHERE id =${req.params.id}`)
    .then(data => res.json(data.rows))
    .catch(e => res.json(e))

})

usersRouter.post('api/users', (req, res) => {
    const newUser = req.body;
    client.query(`INSERT INTO users SET ${newUser}`, (err, results) => {
        if(err) throw err;
        res.json(result);
    })
})

module.exports = usersRouter;