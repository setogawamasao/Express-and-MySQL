const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 3000

const con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'docker',
  password: 'docker',
  database: 'test_database'
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
});

app.get('/', (req, res) => {
  const sql = "select * from test"
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))