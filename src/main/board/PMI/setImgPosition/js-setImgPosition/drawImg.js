var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();

img1.onload = function() {
    ctx.drawImage(img1, 300, 380, 100, 100);
};

img2.onload = function() {
    ctx.drawImage(img2, 20, 250, 100, 100);
};

img3.onload = function() {
    ctx.drawImage(img3, 130, 150, 100, 100);
};

img4.onload = function() {
    ctx.drawImage(img4, 200, 35, 100, 100);
};

img5.onload = function() {
    ctx.drawImage(img5, 380, 200, 100, 100);
};

img1.src = 'img/blue.jpg';
img2.src = 'img/green.jpg';
img3.src = 'img/pink.jpg';
img4.src = 'img/orange.jpg';
img5.src = 'img/yellow.jpg';
