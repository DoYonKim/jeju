const express = require('express');
const router = express.Router();

let result;

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
  user     : 'root',           // mysql user
  password : '1234',       // mysql password
  database : 'jeju'         // mysql 데이터베이스
});
connection.connect();

connection.query('SELECT * from test', 
function (error, results, fields) {
  if (error) {
      console.log(error);
  };
  console.log(results);
  result = results;
});

connection.end();


router.get('/', (req, res)=>res.json(result));

module.exports = router;