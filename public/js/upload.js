Dropzone.autoDiscover = false;  // deprecated 된 옵션. false로 해놓는걸 공식문서에서 명시
const dropzone = new Dropzone("div.dropzone", { 
  url: "https://localhost:3000/upload",
  method: 'post',
});



