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