
CREATE TABLE IF NOT EXISTS user_login (
    user_key INTEGER PRIMARY KEY AUTOINCREMENT,
    student_id TEXT NOT NULL UNIQUE,
    passkey TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    user_key INTEGER PRIMARY KEY,
    user_name TEXT,
    age INTEGER,
    date_of_birth TEXT,
    user_address TEXT,
    school_year TEXT,
    school_section TEXT,
    grade_level TEXT,
    FOREIGN KEY (user_key) REFERENCES user_login(user_key)
);

CREATE TABLE IF NOT EXISTS tasks (
    task_id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_title TEXT,
    task_subject TEXT,
    teacher TEXT,
    date_start TEXT,
    date_end TEXT,
    time_start TEXT,
    time_end TEXT,
    task_description TEXT
);

CREATE TABLE IF NOT EXISTS assignments (
    assignment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_key INTEGER,
    task_id INTEGER,
    FOREIGN KEY (user_key) REFERENCES user_login(user_key),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    UNIQUE (user_key, task_id)
);

INSERT INTO user_login (student_id, passkey) VALUES
    ('24-1234-567', 'securePass1'),
    ('24-9876-543', 'testPass2'),
    ('23-2468-012', 'anotherPass'),
    ('25-1357-901', 'pass123');

INSERT INTO users (user_key, user_name, age, date_of_birth, user_address, school_year, school_section, grade_level) VALUES
    (1, 'Alice Smith', 16, '2008-03-15', '10 Pine St', '2024-2025', 'A', '11'),
    (2, 'Bob Johnson', 17, '2007-09-22', '22 Oak Ave', '2024-2025', 'B', '12'),
    (3, 'Charlie Brown', 15, '2009-01-10', '33 Maple Ln', '2024-2025', 'C', '10'),
    (4, 'Diana Miller', 18, '2006-06-01', '44 Willow Rd', '2024-2025', 'A', '12');

INSERT INTO tasks (task_title, task_subject, teacher, date_start, date_end, time_start, time_end, task_description) VALUES
    ('Math Assignment 1', 'Mathematics', 'Mr. Davis', '2024-02-05', '2024-02-12', '10:00', '11:00', 'Complete exercises 1-20'),
    ('Science Project', 'Science', 'Ms. Green', '2024-02-15', '2024-02-29', '13:00', '15:00', 'Research and present a topic'),
    ('English Essay', 'English', 'Mrs. White', '2024-03-01', '2024-03-15', '14:00', '15:30', 'Write an essay on a chosen topic'),
    ('History Presentation', 'History', 'Mr. Black', '2024-03-10', '2024-03-20', '09:00', '10:00', 'Prepare a presentation on a historical event');

INSERT INTO assignments (user_key, task_id) VALUES
    (1, 1),  -- Alice is assigned Math Assignment 1
    (1, 2),  -- Alice is assigned Science Project
    (2, 2),  -- Bob is assigned Science Project
    (2, 3),  -- Bob is assigned English Essay
    (3, 1),  -- Charlie is assigned Math Assignment 1
    (3, 4),  -- Charlie is assigned History Presentation
    (4, 3),  -- Diana is assigned English Essay
    (4, 4);  -- Diana is assigned History Presentation