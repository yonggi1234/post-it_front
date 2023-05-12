let postIts = [];

function createPostIt() {
var board = document.getElementById("board");
var boardRect = board.getBoundingClientRect();
var boardX = boardRect.left;
var boardY = boardRect.top;

var randomX = Math.floor(Math.random() * (board.offsetWidth - 100));
var randomY = Math.floor(Math.random() * (board.offsetHeight - 100));

var postIt = document.createElement("div");
postIt.className = "post-it";
postIt.style.left = (boardX + randomX) + "px";
postIt.style.top = (boardY + randomY) + "px";
postIt.innerHTML = "New Post-it";
board.appendChild(postIt);

dragElement(postIt);
        
// 생성한 포스트잇을 배열에 저장
postIts.push(postIt);
}
// function createPostIt(importance, size, color) {
//   const postIt = document.createElement('div');
//   postIt.classList.add('post-it');
  
//   // 포스트잇 스타일 설정
//   if (size === 0) {
//     postIt.style.transform = 'scaleY(0.5)';
//   }
  
//   if (color === 'orange') {
//     postIt.style.backgroundColor = '#FFA500';
//   } else if (color === 'blue') {
//     postIt.style.backgroundColor = '#00BFFF';
//   } else if (color === 'green') {
//     postIt.style.backgroundColor = '#008000';
//   } else if (color === 'yellow') {
//     postIt.style.backgroundColor = '#FFFF00';
//   } else if (color === 'red') {
//     postIt.style.backgroundColor = '#FF0000';
//   }
  
//   // const postItHeader = document.createElement('h2');
//   // postItHeader.textContent = title;
  
//   // const postItContent = document.createElement('p');
//   // postItContent.textContent = content;
  
//   const importanceDiv = document.createElement('div');
//   importanceDiv.classList.add('importance');
  
//   for (let i = 1; i <= importance; i++) {
//     const checkbox = document.createElement('div');
//     checkbox.classList.add('checkbox', 'checked');
//     importanceDiv.appendChild(checkbox);
//   }
  
//   for (let i = importance + 1; i <= 6; i++) {
//     const checkbox = document.createElement('div');
//     checkbox.classList.add('checkbox');
//     importanceDiv.appendChild(checkbox);
//   }
  
//   // postIt.appendChild(postItHeader);
//   // postIt.appendChild(postItContent);
//   postIt.appendChild(importanceDiv);
  
//   const board = document.querySelector('#board');
//   postIts.push(postIt);
//   board.appendChild(postIt);
// }

function deletePostIt() {
    // 배열에서 가장 최근에 생성된 포스트잇 선택하여 삭제
    let lastPostIt = postIts.pop();
    lastPostIt.remove();
    }
  
// 포스트잇을 드래그할 수 있도록 하는 함수
function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    }
}


// let postIts = [];

// function loadPostIts() {
//   fetch('/api/post-its')
//     .then(response => response.json())
//     .then(postItsData => {
//       for (const postItData of postItsData) {
//         createPostIt(postItData.importance, postItData.size, postItData.color);
//       }
//     })
//     .catch(error => console.error(error));
// }

// function deletePostIt() {
//   const lastPostIt = postIts.pop();
//   lastPostIt.remove();
// }

// function dragElement(element) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   element.onmousedown = dragMouseDown;

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     element.style.top = (element.offsetTop - pos2) + "px";
//     element.style.left = (element.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

// loadPostIts();



// // XMLHttpRequest 객체 생성
// var xhr = new XMLHttpRequest();

// // 요청을 보낼 URL 설정
// var url = "getimage.php";

// // 요청 방식 설정
// xhr.open("GET", url, true);

// // 요청에 대한 콜백 함수 정의
// xhr.onreadystatechange = function() {
//   // 요청이 완료되었고, 성공적으로 응답을 받았을 경우
//   if (this.readyState === 4 && this.status === 200) {
//     // 응답받은 데이터를 처리하는 코드
//     var data = JSON.parse(this.responseText);
//     displayImages(data);
//   }
// };

// // 요청 전송
// xhr.send();

// const board = document.getElementById('board');

// // 서버로부터 JSON 형식의 데이터를 가져옵니다.
// fetch('/get_data')
//     .then(response => response.json())
//     .then(results => {
//         results.forEach(result => {
//             const image = document.createElement('img');
//             image.src = result[0];
//             image.className = 'image';
//             image.style.left = result[1] + 'px';
//             image.style.top = result[2] + 'px';
//             board.appendChild(image);
//         });
//     });