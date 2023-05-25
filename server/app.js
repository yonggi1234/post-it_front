const express = require("express");
const app = express();
// const ejs = require('ejs');
const port = 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views/css')));
app.use(express.static(path.join(__dirname, 'views/js')));
app.use(express.static(path.join(__dirname, 'images')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/js/main.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/js', 'main.js'));
});

// view engine 설정
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// DB 연결정보
const mysql = require('mysql');
const connection = mysql.createConnection({
  // 본인 db정보 기입
  host: 'localhost',
  user: 'root',
  password: '2461132',
  database: 'post_it'
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

app.listen(port, () => {
  console.log('Server open', port);
});