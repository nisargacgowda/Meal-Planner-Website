const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Teju@123', // Replace with your MySQL password
    database: 'healthDB'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('MySQL Connection Error:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// API Endpoint to handle Contact Form
app.post('/submit-contact-form', (req, res) => {
    const { name, email, message } = req.body;

    const sql = `
        INSERT INTO contacts (name, email, message)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('Insert Error:', err);
            return res.status(500).send('Error saving message');
        }

        console.log('New Contact Saved:', result.insertId);
        res.status(200).send('Message received successfully!');
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});