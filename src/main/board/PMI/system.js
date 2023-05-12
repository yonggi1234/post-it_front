let arr_PostIt=[];

function createPostIt() {
    var Rect = document.getElementById("rectangle");
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight * (55/100);

    var randomX = Math.random()*(window.innerWidth-centerX);
    var randomY = Math.random()*(window.innerHeight-centerY);

    var postIt = document.createElement("div");
    postIt.className = "post_it";
    postIt.style.left = (centerX + randomX) + "px";
    postIt.style.top = (centerY + randomY) + "px";
    postIt.innerHTML = "New Post-It";
    Rect.appendChild(postIt);

    arr_PostIt.push(postIt);
}