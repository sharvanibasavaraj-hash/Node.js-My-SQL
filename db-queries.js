
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sharvsql14",
    database: "student_db"
});

// SELECT - Retrieve students
connection.query("SELECT * FROM students", (err, results) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log("Student Records:");
    console.log(results);

    connection.end();
});
