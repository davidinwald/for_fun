const { Client } = require('pg');


// Connect to the AWS RDS Postgres database
const client = new Client({
  user: 'ryanabest',
  host: 'datastructures.cbijimkrmieh.us-east-1.rds.amazonaws.com',
  database: 'datastructures',
  password: process.env.RB_AWS_PW,
  port: 5432,
})
client.connect()

console.log(process.env.RB_AWS_PW)

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
});


