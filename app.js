const express = require("express");
const app = express();
const ejs = require('ejs');

const router = express.Router();


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

//db값 확인
// connection.connect();
// let sql ="SELECT img FROM post";
// connection.query(sql, function (err, rows, fields) { 
//         if (err)    console.log(err);
//         else console.log(rows[1]);
//     });
// connection.end(); 

//kanban 호출
app.get('/kanban', function (req, res) {
    var sql ="SELECT * FROM post";
    connection.query(sql, function (err, result, fields) {
        if(err) console.log(err);
        else res.render('kanban', {data : result});
    });
});

//pmi 호출
app.get('/pmi', function (req, res) {
    var sql ="SELECT img FROM post";
    connection.query(sql, function (err, result, fields) {
        if(err) console.log(err);
        else res.render('pmi', {data : result});
    });
});


app.get('/api/postits', function (req, res) {
  var sql = "SELECT img, position_x, position_y FROM post";
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
        position_y: postit.position_y
      };
    });
    res.json(postits);
    }
  });
});
  
// var save=document.getElementById("save");

// save.addEventListener('click',function(){
//     var postDIR=document.querySelectorAll('[class*=img]')
//     postDIR.forEach(function(post) {
//         var postedit = 
//         {
//             img: post.className,
//             position_x: getComputedStyle(post).left,
//             position_y: getComputedStyle(post).top,
//         };
//         console.log(postedit);
//       });
//     });

app.get("/api/save", (req, res) => {
    //수정하려는 포스트잇 정보 불러오기
        console.log(res);

        // var sql= 'UPDATE post SET position_x=?, position_y=? WHERE img=?';
        // connection(sql,[img,x,y],function(err,result,fields){
        //       if(err){
        //         console.log(err);
        //         res.sendStatus(500);
        //       }
        //       else  {
        //         console.log("성공")
        //         res.redirect('/')
        //       }
        //     })
});



app.get('/scammper', function (req, res) {
    var sql ="SELECT img FROM post";
    connection.query(sql, function (err, result, fields) {
        if(err) console.log(err);
        else res.render('scammper', {data : result});
    });
});





app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log("server open", port);
})
