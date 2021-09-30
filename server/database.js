const {Client} = require('pg')

const client = new Client({
  host: "localhost",
  port: "5432",
  password: "rootUser",
  database: "gameofwar"
})

client.connect()

client.query(`select * from wins`, (err, res) => {
  if(!err) {
    console.log(res.rows);
  } else {
    console.log(err.message)
  }
  client.end;
})
