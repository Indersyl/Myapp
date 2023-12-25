const Pool = require("pg").Pool;
const pool = new Pool({
  user: "doadmin",
  host: "db-postgresql-sgp1-15522-do-user-14960196-0.c.db.ondigitalocean.com",
  database: "defaultdb",
  password: "AVNS_ubjFYgHOKscukEo8lYJ",
  port: 25060,
});
//get all doctor our database
const getdoctor = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM doctor", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};
//create a new doctor record in the databsse
const createdoctor = (body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      "INSERT INTO doctor (name, email) VALUES ($1, $2) RETURNING *",
      [name, email],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new doctor has been added: ${JSON.stringify(results.rows[0])}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
//delete a doctor
const deletedoctor = (id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      "DELETE FROM doctor WHERE id = $1",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`doctor deleted with ID: ${id}`);
      }
    );
  });
};
//update a doctor record
const updatedoctor = (id, body) => {
  return new Promise(function (resolve, reject) {
    const { name, email } = body;
    pool.query(
      "UPDATE doctor SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(`doctor updated: ${JSON.stringify(results.rows[0])}`);
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};
module.exports = {
  getdoctor,
  createdoctor,
  deletedoctor,
  updatedoctor
};

const express = require('express')
const app = express()
const port = 25060

const doctor_model = require('./doctorModel')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  doctor_model.getdoctors()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/doctors', (req, res) => {
  doctor_model.createdoctor(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/doctors/:id', (req, res) => {
  doctor_model.deletedoctor(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})
app.put("/doctors/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  doctor_model
    .updatedoctor(id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000 ");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

