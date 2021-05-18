const express = require('express');
// const ordersRoute = require('./routes/ordersRoute');
const usersRoute  = require('./routes/usersRoute');
const app = express();
app.use(express.json());
const port = 3002 || process.env.PORT


// app.use(ordersRoute);
app.use(usersRoute);  




app.listen(port, () => {
    console.log("server running on port " + port);
})