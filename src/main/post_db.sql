-- 1.cmd 접속
-- 2. cd (mysql bin폴더 경로)
--    경로 찾는법 - mysql 검색 후 command line 클릭, 파일 위치 찾기로 bin 폴더 이동가능.
--                이후 작업탐색기 복사+ 붙여넣기
-- 3. mysql -u root -p
-- 4. CREATE DATABASE post_it
-- 5. USE post_it;
-- 6. 아래 내용 테이블 하나씩 복사 붙여넣기
drop table post;
drop table user;

CREATE TABLE post(                               
 -- 그림 index번호                               
  idx int NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- 이미지 저장경로
  img varchar(30) NOT NULL,
-- 그림좌표 x,y
  position_x int(5) NOT NULL,
  position_y int(5) NOT NULL,
-- 포스트잇 색(5가지)  
  color enum('orange','blue''green','yellow','red'),
-- 중요도(1~6)
  importance int(2)  check(importance between 1 and 6),
-- 포스트잇 크기구분(big:1, small: 0)  
  size BOOLEAN NOT NULL DEFAULT 1
);

CREATE TABLE user(                               
  id VARCHAR(10) PRIMARY KEY,
  pw varchar(20) NOT NULL,
  email VARCHAR(30),
  name varchar(30) NOT NULL                                 
);