const express = require("express");
const app = express();
const ejs = require('ejs')
// var db_config = require(__dirname + '/config/database.js');
// 포트번호 3000
const port = 3000;

const path = require('path');
app.use(express.static('public'));


//view engine 설정
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');

//html로 route
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/view/test.html');
//   });

//ejs로 route
// app.get("/", (req, res) => {
    // res.render("kanban");
// })

//DB 연결정보
const mysql = require('mysql');
const connection = mysql.createConnection({
  //본인 db정보 기입
  host : 'localhost',
  user : 'root',
  password : '1111',
  database : 'post_it'
});

//db값 확인
// connection.connect();
// let sql ="SELECT img FROM post";
// connection.query(sql, function (err, rows, fields) { 
//         if (err)    console.log(err);
//         else console.log(rows[1]);
//     });
// connection.end(); 


app.get('/', function (req, res) {
    var sql ="SELECT img FROM post";
    connection.query(sql, function (err, result, fields) {
        if(err) console.log(err);
        else res.render('kanban', {data : result});
    });
});




app.listen(port, () => {
    console.log("server open", port);
})
