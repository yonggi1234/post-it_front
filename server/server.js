// const mysql = require('mysql');
// const express = require('express');

// const app = express();
// const port = 3000;

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '2461132',
//   database: 'post_it'
// });

// connection.connect((error) => {
//   if (error) {
//     console.error('Error connecting to MySQL database: ', error);
//     return;
//   }

//   console.log('Connected to MySQL database.');

//   connection.query('SELECT * FROM post', (error, results, fields) => {
//     if (error) {
//       console.error('Error querying the database: ', error);
//       return;
//     }

//     console.log('Results: ', results);

//     const results_json = JSON.stringify(results);
//     app.get('/get_data', (req, res) => {
//       res.setHeader('Content-Type', 'application/json');
//       res.send(results_json);
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });


// // Make an AJAX request to get the image data
// const xhr = new XMLHttpRequest();
// xhr.open('GET', '/get_image', true);
// xhr.responseType = 'arraybuffer';

// xhr.onload = function () {
//   if (this.status === 200) {
//     // Convert the response to a base64-encoded string
//     const base64 = btoa(
//       new Uint8Array(this.response).reduce(
//         (data, byte) => data + String.fromCharCode(byte),
//         ''
//       )
//     );

//     // Set the source of the image element to the base64-encoded string
//     const image = document.createElement('img');
//     image.src = 'data:image/png;base64,' + base64;

//     // Add the image element to the container
//     const container = document.getElementById('image-container');
//     container.appendChild(image);
//   } else {
//     console.error('Failed to get image data: ' + this.status);
//   }
// };

// xhr.send();


// app.get('/image1', (req, res) => {
//   const imagePath = path.join('C:/capstone/capstonebasic', 'post_it_images', 'blue.png');
//   res.sendFile(imagePath);
// });

// app.get('/image2', (req, res) => {
//   const imagePath = path.join('C:/capstone/capstonebasic', 'post_it_images', 'green.png');
//   res.sendFile(imagePath);
// });

// app.get('/image3', (req, res) => {
//   const imagePath = path.join('C:/capstone/capstonebasic', 'post_it_images', 'red.png');
//   res.sendFile(imagePath);
// });

// app.get('/image4', (req, res) => {
//   const imagePath = path.join('C:/capstone/capstonebasic', 'post_it_images', 'orange.png');
//   res.sendFile(imagePath);
// });

// app.get('/image5', (req, res) => {
//   const imagePath = path.join('C:/capstone/capstonebasic', 'post_it_images', 'yellow.png');
//   res.sendFile(imagePath);
// });




// const express = require('express');
// const mysql = require('mysql');
// const app = express();

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'database_name'
// });

// app.get('/image/:id', (req, res) => {
//   const id = req.params.id;
//   const query = `SELECT * FROM images WHERE id = ${id}`;
//   connection.query(query, (error, results, fields) => {
//     if (error) throw error;
//     const imageUrl = results[0].imageUrl;
//     const x = results[0].x;
//     const y = results[0].y;
//     res.send({imageUrl, x, y});
//   });
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });


const express = require("express");
const app = express();
const port = 3000;

// 화면 엔진은 ejs로 설정한다.
app.set("view engine", "ejs");

// Express에서 정적파일 제공
app.use('/static', express.static('static'));
app.use(express.static("public"));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2461132',
  database: 'post_it'
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/postit", (req, res) => {
  // MySQL에서 포스트잇 데이터 가져오기
  const query = "SELECT img, position_x, position_y FROM post";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("MySQL 쿼리 에러:", error);
      res.status(500).send("서버 오류");
      return;
    }

    // 가져온 데이터를 JSON 형식으로 클라이언트에 전달
    res.json(results);
  });
});

app.listen(port, () => {
    connection.connect((error) => {
        if (error) {
          console.error('MySQL 연결 에러:', error);
          return;
        }
        console.log('MySQL에 성공적으로 연결되었습니다.');
      });
      
      console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
      // 서버 종료 시 MySQL 연결 해제
      process.on('SIGINT', () => {
        connection.end();
        process.exit();
      });
});