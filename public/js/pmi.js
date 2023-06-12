function resizeBoard() {
    var rectangle = document.getElementById("rectangle");
    var circle = document.getElementById("circle");
    var circle1 = document.getElementById("circle1");
    var circle2 = document.getElementById("circle2");
    var circle3 = document.getElementById("circle3");
    var circle4 = document.getElementById("circle4");
    var circle5 = document.getElementById("circle5");

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var rectangleHeight = windowHeight * 0.995;
    var rectangleWidth = rectangleHeight - 15;

    if (rectangleWidth >= windowWidth - 20){
        rectangleWidth = windowWidth * 0.98;
        rectangleHeight = rectangleWidth + 10;
    }

    var diameter = rectangleWidth-30;

    rectangle.style.width = rectangleWidth + "px";
    rectangle.style.height = rectangleHeight + "px";
    circle.style.width = diameter + "px";
    circle.style.height = diameter + "px";
    circle5.style.width = diameter + "px";
    circle5.style.height = diameter + "px";
    circle4.style.width = (diameter - 10) + "px";
    circle4.style.height = (diameter - 10) + "px";
    circle3.style.width = ((diameter-10) * 4.5 / 7) + "px";
    circle3.style.height = ((diameter-10) * 4.5 / 7) + "px";
    circle2.style.width = ((diameter-10) * 2 / 7) + "px";
    circle2.style.height = ((diameter-10) * 2 / 7) + "px";
    circle1.style.width = ((diameter-10) * 1.5 / 7) + "px";
    circle1.style.height = ((diameter-10) * 1.5 / 7) + "px";
  }
  
  window.onresize = function() {
    resizeBoard();
  };
  
  resizeBoard();