### 초기 구성
* git clone
'''
git clone https://github.com/yonggi1234/post-it_front.git
'''
* db 구성
mysql에서 .vscode\src\post_db.sql으 sql문 실행


#### Nodejs/Express 초기 설정

1. Node.js & MYSQL 다운
본인 운영체제에 맞는 버전 다운
'''
https://nodejs.org/ko
https://www.mysql.com/downloads/
'''
2. 터미널로 이동 후라이브러리 설치
'''
npm init
'''
3. express 프레임워크 설치
'''
npm install express
'''
4. db 연결 설정
app.js를 본인 db 정보로 수정한다.
'''
const mysql = require('mysql');
const connection = mysql.createConnection({
    //본인 db정보 기입
    host : 'localhost',
    user : '본인 user명',
    password : '본인 password',
    database : 'post_it'
});
'''
5. 서버 실행
터미널에 다음의 명령어를 실행한다.
'''
node app.js
'''
그 후 브라우저에서 localhost에 들어간다.
'''
http://localhost:3000/kanban
http://localhost:3000/scammper
http://localhost:3000/pmi
'''
