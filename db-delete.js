
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your sql password",
    database: "student_db"
});

const sql = "DELETE FROM students WHERE id = ?";

const values = [1];

connection.query(sql, values, (err, result) => {
    if (err) {
        console.log(err.message);
    } else if (result.affectedRows === 0) {
        console.log("Student not found");
    } else {
        console.log("Student deleted successfully!");
    }

    connection.end();
});
