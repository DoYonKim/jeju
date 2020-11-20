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

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO jeju.card (category, date, location, contents1, contents2, contents3, contents4, contents5, contents6, contents7, contents8, contents9 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var values = ['CAT01', '2017-08-28', '성산읍', '내용1', '내용2', '내용3', '내용4', '내용5', '내용6', '내용7', '내용8' , '내용9'];
  connection.query(sql, values, function (err, result) {
    
    console.log(sql);
    console.log(values);

    if (err) {
        console.log(err);
        throw err
    }else{
        console.log("Number of records inserted: " + result.affectedRows);
        result = this.result;
    }
    
  });
});



connection.end();


router.get('/', (req, res)=>res.json(result));

module.exports = router;