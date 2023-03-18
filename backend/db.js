const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors'); // cross origin, connects the backend and the frontend

dotenv.config({ path: './.env' });

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

// app.post("/register", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     db.query(
//         "INSERT INTO tbl_admin (username, password) VALUES (?, ?)",
//         [username, password],
//         (err, result) => {
//             console.log("DB: " + JSON.stringify(result));
//         }
//     );
// });


app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT adminID FROM tbl_admin WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                console.log("err");
                return res.send(err);
            }
            else {
                if (result.length > 0) {
                    res.send({
                        status: 200,
                        message: result
                    });
                    console.log("");
                }
                else {
                    res.send({ error: "WRONG DETAILS" })
                }
            }
        }
    );
});

app.get('/verify/:id', (req, res) => {
    const id = req.params.id;

    db.query(
        "SELECT * FROM tbl_admin WHERE adminID = ?",
        [id],
        (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            }
            else {
                if (result.length > 0 ) {
                    return res.send({ message: "verified" });

                } else {
                    return res.send({
                        status: 404,
                        message: "Doesn't exist"
                    })
                }
            }

        }
    )
    console.log(id)
})
app.get('/', (req, res) => {

    db.query(
        "SELECT * FROM tbl_admin ",
        (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            }
            else {
                return res.send({
                        status: 404,
                        message: result
                })

        }
    }
    )
})

app.listen("3001")
