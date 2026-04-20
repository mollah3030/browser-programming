// test-db.js
const { Client } = require('pg');

// We test the connection exactly how Medusa tries it
const client = new Client({
  connectionString: "postgres://postgres:password123@127.0.0.1:5432/medusa-store"
});

console.log("--- STARTING TEST ---");
console.log("1. Trying to connect to PostgreSQL...");

client.connect()
  .then(() => {
    console.log("2. SUCCESS: Connected!");
    return client.query('SELECT NOW()');
  })
  .then((res) => {
    console.log("3. Database Time:", res.rows[0].now);
    console.log("--- RESULT: YOUR DATABASE IS WORKING PERFECTLY ---");
    client.end();
  })
  .catch((err) => {
    console.log("--- FAILURE: CONNECTION FAILED ---");
    console.error("Error Code:", err.code);
    console.error("Error Message:", err.message);
    if (err.message.includes("password")) {
      console.log(">>> SOLUTION: Your password is NOT 'postgres'. We need to reset it.");
    } else if (err.code === 'ECONNREFUSED') {
      console.log(">>> SOLUTION: The database is not running or blocking port 5432.");
    }
    client.end();
  });