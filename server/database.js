const {Client} = require('pg')

const client = new Client({
  host: "localhost",
  port: "5432",
  password: "rootUser",
  database: "gameofwar"
})

client.connect()

export default client

