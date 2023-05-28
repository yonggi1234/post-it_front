window.addEventListener('DOMContentLoaded', function() {
    var board = document.getElementById('board');
    var postItImgs = [];

    fetch('/api/postits')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        postItImgs = data;
        createPostIts();
      })
      .catch(function(error) {
        console.log('Error:', error);
      });

    function createPostIts() {
        postItImgs.forEach(function(postit) {
            var postItElement = document.createElement('div');
            postItElement.className = 'postit';
            postItElement.style.left = postit.position_x + 'px';
            postItElement.style.top = postit.position_y + 'px';

            var imgElement = document.createElement('img');
            imgElement.src = postit.img;

            postItElement.appendChild(imgElement);
            board.appendChild(postItElement);
            addDoubleClickEvent(postItElement);
            makeDraggable(postItElement);
        });
    }
});

// 이미지 드래그 가능하도록 만드는 함수
function makeDraggable(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        if (e.target.tagName === 'IMG') {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + 'px';
        element.style.left = (element.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// 이미지 더블클릭으로 삭제
function addDoubleClickEvent(element) {
    element.addEventListener('dblclick', function(e) {
        e.preventDefault();
        this.parentNode.removeChild(this);
    });
}