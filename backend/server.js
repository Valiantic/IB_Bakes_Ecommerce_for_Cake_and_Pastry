const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

//for app.use 
const session = require('express-session');


// Create an Express app
const app = express();
const PORT = 5000;

// Middleware // allows the server to connect with frontend
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Session setup
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Use your MySQL username
  password: '', // Use your MySQL password
  database: 'db_ib_bakes'
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
});


// ROUTES

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password, full_name, address, phone_number } = req.body;
  if (!username || !email || !password || !full_name || !address || !phone_number) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    // Hash password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO tbl_users (username, email, password, full_name, address, phone_number) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [username, email, hashedPassword, full_name, address, phone_number], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }
      return res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    return res.status(500).json({ message: 'Error registering user' });
  }
});


// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM tbl_users WHERE email = ?';
  db.query(query, [email], (err, result) => {
    if (err) return res.status(500).json({ error: 'Server error' });

    if (result.length === 0) {
      return res.status(400).json({ error: 'User not found' });
    }

    const user = result[0];

    // Compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: 'Server error' });

      if (!isMatch) return res.status(400).json({ error: 'Invalid password' });

      // Create session
      req.session.userId = user.id;
      req.session.username = user.username;


      // Display username
      if (user.username === 'Admin') {
        return res.json({ message: 'Welcome back Admin!', username: user.username, redirectUrl: '/admin' });
      } else {
        return res.json({ message: 'Login successful!', username: user.username, redirectUrl: '/customer' });
      }

    });
  });
});

// Logout Route
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out' });
});



// Server Start
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  