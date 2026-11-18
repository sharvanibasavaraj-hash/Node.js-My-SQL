
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sharvsql14",
    database: "student_db"
});

const sql = `
    UPDATE students
    SET department = ?, email = ?
    WHERE id = ?
`;

const values = ["ISE", "rahul123@gmail.com", 1];

connection.query(sql, values, (err, result) => {
    if (err) {
        console.log(err.message);
    } else if (result.affectedRows === 0) {
        console.log("Student not found or no changes made");
    } else {
        console.log("Student updated successfully!");
    }

    connection.end();
});
