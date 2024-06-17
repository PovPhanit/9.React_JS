const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const connection = require('./db');
const multer = require('multer');
const upload = multer();

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = 'your_secret_key'; // Keep this secret and safe

// Register Route
app.post('/api/register', upload.none(), async (req, res) => {
  const { username, password } = req.body;
  console.log(username,password);
  try {

    const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
    connection.query(checkUserQuery, [username], async (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      if (results.length > 0) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
      connection.query(insertUserQuery, [username, hashedPassword], (err, results) => {
        if (err) {
          console.error('Database insert error:', err);
          return res.status(400).json({ message: 'Error registering user' });
        }
        res.status(201).json({ message: 'User registered' });
      });
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



// Login Route
app.post('/api/login', upload.none(), (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], async (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = jwt.sign({ username: user.username,developer:"Pov Phanit" }, SECRET_KEY, { expiresIn: '168h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});





// Protected Route
app.get('/api/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access denied' });
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: 'Protected data', user: decoded });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
