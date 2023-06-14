// routes/user.js
const express = require("express");
const app = express();
const ejs = require('ejs')

// app.get("/api/save", (req, res) => {
  //수정하려는 포스트잇 정보 불러오기
      // console.log(res);

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
// });