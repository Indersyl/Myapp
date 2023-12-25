const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 25060;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'doadmin',
  host: 'db-postgresql-sgp1-15522-do-user-14960196-0.c.db.ondigitalocean.com',
  database: 'defaultdb',
  password: 'AVNS_ubjFYgHOKscukEo8lYJ',
  port: 25060,
});

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM doctor');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});