const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fetchdata'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define a route to fetch data with pagination
app.get('/api/data', (req, res) => {
  console.log("fetch")
  const { page=1 , limit=60 } = req.query;
  console.log(page,limit)
  const offset = (page - 1) * limit;
  
  connection.query(`SELECT * FROM datarefresh LIMIT ${parseInt(limit)} OFFSET ${parseInt(offset)}`, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
