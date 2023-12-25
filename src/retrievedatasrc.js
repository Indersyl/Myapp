const { pool } = require("./db");

async function retrieveDatasrc() {
  try {
    const res = await pool.query("SELECT * FROM doctor");
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  }
}

retrieveDatasrc()

export default retrieveDatasrc;
