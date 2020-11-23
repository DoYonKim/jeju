const express = require('express');
const router = express.Router();

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
  user     : 'root',           // mysql user
  password : '1234',       // mysql password
  database : 'jeju'         // mysql 데이터베이스
});


router.get('/', (req, res)=>res.json({username:'bryan~~~'}));
router.get('/group', (req, res)=>res.json({username:'dev group. bryan'}));


router.get('/testInsert', function(req,res){

  var sql = "INSERT INTO jeju.card (category, date, location, contents1, contents2, contents3, contents4, contents5, contents6, contents7, contents8, contents9 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  var values = ['CAT01', '2017-08-28', '성산읍', '내용1', '내용2', '내용3', '내용4', '내용5', '내용6', '내용7', '내용8' , '내용9'];
  connection.query(sql, values, function (err, result) {

    if (err) {
        console.log(err);
        res.json({insertData:'failed'}); 
    }else{
        console.log("Number of records inserted: " + result.affectedRows + " time " + new Date());
        res.json({insertData:'succeeded'}); 
    }
    
  });
})

router.post("/getMAP03Data", function (req, res) {
    var query =
        "select card.card_id as cardId, card.card_contents_1 as locationX, card.card_contents_2 as locationY from jeju.card card, jeju.cardHolder holder where card.card_holder_id = holder.card_holder_id and card.card_type = 'MAP03' and holder.card_holder_id =" +
        req.body.cardId +
        " order by card.card_order asc";

    //var query = "SELECT id as cardId, contents1 as locationX, contents2 as locationY from jeju.card where id = '" + req.body.cardId + "'";
    connection.query(query, function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results);
    });
});

module.exports = router;