const express = require("express");
const app = express();
const ejs = require('ejs');

// const router = express.Router();


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
app.get("/", (req, res) => {
    res.render("upload");
})

//DB 연결정보
const mysql = require('mysql');
const connection = mysql.createConnection({
  //본인 db정보 기입
  host : 'localhost',
  user : 'root',
  password : '1111',
  database : 'post_it'
});


//kanban 호출
app.get('/kanban', function (req, res) {
    var sql ="SELECT * FROM post where img like '/img/pmi%'";
    connection.query(sql, function (err, result, fields) {
        if(err) console.log(err);
        else res.render('kanban', {data : result});
    });
});

//pmi 호출
app.get('/pmi', function (req, res) {
    var sql ="SELECT * FROM post where img like '/img/pmi%'";
    connection.query(sql, function (err, result, fields) {
        if(err) console.log(err);
        else res.render('pmi', {data : result});
    });
});

//scammper 호출
app.get('/scammper', function (req, res) {
  var sql ="SELECT * FROM post where img like '/img/scammper%'";
  connection.query(sql, function (err, result, fields) {
      if(err) console.log(err);
      else res.render('scammper', {data : result});
  });
});


app.get('/api/pmi', function (req, res) {
  var sql = "SELECT img, position_x, position_y,size FROM post where img like '/img/pmi%'";
  connection.query(sql, function (err, result, fields) {
    if (err) {
    console.log(err);
    res.sendStatus(500);
    } else {
    // 가져온 데이터를 기반으로 이미지를 생성하고 보드에 추가하는 로직 작성
    var postits = result.map(postit => {
      return {
        img: postit.img,
        position_x: postit.position_x,
        position_y: postit.position_y,
        size: postit.size
      };
    });
    res.json(postits);
    }
  });
});

app.get('/api/scammper', function (req, res) {
  var sql = "SELECT img, position_x, position_y, size FROM post where img like '/img/scammper%'";
  connection.query(sql, function (err, result, fields) {
    if (err) {
    console.log(err);
    res.sendStatus(500);
    } else {
    // 가져온 데이터를 기반으로 이미지를 생성하고 보드에 추가하는 로직 작성
    var postits = result.map(postit => {
      return {
        img: postit.img,
        position_x: postit.position_x,
        position_y: postit.position_y,
        size: postit.size
      };
    });
    res.json(postits);
    }
  });
});
  

// app.get("/api/save", (req, res) => {
//     img=res.img;
//     x=res.position_x;
//     y=res.position_y;
//     //수정하려는 포스트잇 정보 불러오기
//         var sql= 'SELECT * from post WHERE position_x=? and position_y=? and img=?';
//         // var sql= 'UPDATE post SET position_x=?, position_y=? WHERE img=?';
//         connection(sql,[img,x,y],function(err,result,fields){
//               if(err){
//                 console.log(err);
//                 res.sendStatus(500);
//               }
//               else  {
//                 console.log("성공")
//                 res.redirect('/kanban')
//               }
//             })
// });


app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log("server open", port);
})
