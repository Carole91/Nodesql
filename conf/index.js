// const { Pool } = require("pg");
// require('dotenv').config()

// const client = new Pool({
//   user: process.env.ELEPHANT_SQL_USER,
//   password: process.env.ELEPHANT_SQL_PW,
//   host: process.env.ELEPHANT_SQL_HOST,
//   database: process.env.ELEPHANT_SQL_DB,
//   port: Number(process.env.ELEPHANT_SQL_DB)
// });

// module.exports = client;

//or native libpq bindings
//var pg = require('pg').native

const pg = require('pg');
const conString = "postgres://veeurtxn:Dk1G-ocexDDJKBBCOPtqRgdczKmhA0u6@hattie.db.elephantsql.com/veeurtxn" //Can be found in the Details page
const client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //client.end();
  });
});

module.exports = client