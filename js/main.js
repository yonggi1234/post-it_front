
//이미지 드래그
const postItImgs = document.querySelectorAll('.post_it_img');
postItImgs.forEach(postItImg => {
    dragElement(postItImg);
});
//이미지 우클릭으로 삭제
const postItImgsdel = document.querySelectorAll('.post_it_img');
postItImgs.forEach(postItImg => {
    dragElement(postItImg);
    postItImg.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // 브라우저 기본 동작 막기
        this.parentNode.removeChild(this);
    });
});


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

