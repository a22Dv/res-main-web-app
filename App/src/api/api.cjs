// USE WITH CAUTION. AI_GENERATED PROTOTYPE

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const db = new sqlite3.Database('../database/database.db');

app.use(cors());
app.use(bodyParser.json());

// User login endpoint
app.post('/login', (req, res) => {
    const { studentID, password } = req.body;

    if (!studentID || !password) {
        return res.status(400).json({ error: 'Student ID and password are required.' });
    }

    const query = `
        SELECT user_login.user_key
        FROM user_login
        WHERE user_login.student_id = ? AND user_login.passkey = ?`;
    console.log('Request received.');

    db.get(query, [studentID, password], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error.' });
        }

        if (!user) {
            return res.status(404).json({ error: 'Invalid credentials.' });
        }

        res.json({ message: 'Login successful.', userKey: user.user_key });
    });
});

// Get user details endpoint
app.get('/users/:userKey', (req, res) => {
    const { userKey } = req.params;

    const query = `
        SELECT users.user_name, users.age, users.date_of_birth, 
               users.user_address, users.school_year, users.school_section, users.grade_level
        FROM users
        WHERE users.user_key = ?`;

    db.get(query, [userKey], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error.' });
        }

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.json(user);
    });
});

// Get assignments for a user
app.get('/assignments/:userKey', (req, res) => {
    const { userKey } = req.params;

    const query = `
        SELECT assignments.assignment_id, tasks.task_title, tasks.task_subject, tasks.teacher,
               tasks.date_start, tasks.date_end, tasks.time_start, tasks.time_end, tasks.task_description
        FROM assignments
        JOIN tasks ON assignments.task_id = tasks.task_id
        WHERE assignments.user_key = ?`;

    db.all(query, [userKey], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error.' });
        }

        res.json(rows);
    });
});

// Get task details by assignment ID
app.get('/tasks/:assignmentID', (req, res) => {
    const { assignmentID } = req.params;

    const query = `
        SELECT tasks.*
        FROM assignments
        JOIN tasks ON assignments.task_id = tasks.task_id
        WHERE assignments.assignment_id = ?`;

    db.get(query, [assignmentID], (err, task) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error.' });
        }

        if (!task) {
            return res.status(404).json({ error: 'Task not found.' });
        }

        res.json(task);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
