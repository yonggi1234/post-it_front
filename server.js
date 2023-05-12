// express 인스턴스 생성 및 app에 저장
const express = require("express");
const app = express();

// 8000번 포트로 지정
const port = 3000;

// 화면 엔진은 ejs로 설정한다.
app.set("view engine", "ejs");

// Express에서 정적파일 제공
app.use('/static', express.static('static'));

// test.ejs 실행
app.get("/", (req, res) => {
    res.render("kanban");
})

// 지정된 포트로 로컬서버 열기
app.listen(port, () => {
    console.log("server open", port);
})
app.use(express.static("public"));