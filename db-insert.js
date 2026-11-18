
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sharvsql14",
    database: "student_db"
});

const sql = `INSERT INTO students
(name, usn, department, year, email)
VALUES (?, ?, ?, ?, ?)`;

const values = [
    "Rahul",
    "1VT24CS001",
    "CSE",
    "2nd Year",
    "rahul@gmail.com"
];

connection.query(sql, values, (err, result) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Student added successfully!");
        console.log("Inserted ID:", result.insertId);
    }

    connection.end();
});
