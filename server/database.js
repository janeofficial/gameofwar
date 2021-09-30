const {Client} = require('pg')

const client = new Client({
  host: "localhost",
  port: "5432",
  password: "rootUser",
  database: "gameofwar"
})

export default client
