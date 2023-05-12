// PMI 보드 위의 포스트잇 이미지를 원형으로 배열하고 회전시키는 기능
// app.js
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.isDown = false;
    this.moveX = 0;
    this.offsetX = 0;

    document.addEventListener("pointerdown", this.onDown.bind(this), false);
    document.addEventListener("pointermove", this.onMove.bind(this), false);
    document.addEventListener("pointerup", this.onUp.bind(this), false);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.polygon = new Polygon(
      this.stageWidth / 4,
      this.stageHeight / 4.5,
      this.stageHeight /11, // radius
      5
    );
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.moveX *= 0.92;

    this.polygon.animate(this.ctx, this.moveX);
  }

  onDown(e) {
    this.isDown = true;
    this.moveX = 0;
    this.offsetX = e.clientX;
  }

  onMove(e) {
    if (this.isDown) {
      this.moveX = e.clientX - this.offsetX;
      this.offsetX = e.clientX;
    }
  }

  onUp(e) {
    this.isDown = false;
  }
}

window.onload = () => {
  new App();
};

// polygon.js
const PI2 = Math.PI * 2;

const COLORS = [
  "rgba(225, 225, 225, 0)",
  "rgba(225, 225, 225, 0)",
  "rgba(225, 225, 225, 0)",
  "rgba(225, 225, 225, 0)",
  "rgba(225, 225, 225, 0)"
];


class Polygon {
  constructor(x, y, radius, sides) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.sides = sides;
      this.rotate = 0;
  }

  animate(ctx, moveX) {
      ctx.save();

      const angle = PI2 / this.sides;
      const angle2 = PI2 / 4;

      ctx.translate(this.x, this.y);

      this.rotate += moveX * 0.008;
      ctx.rotate(this.rotate);

      for (let i = 0; i < this.sides; i++) {
          const x = this.radius * Math.cos(angle * i);
          const y = this.radius * Math.sin(angle * i);

          i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

          ctx.save();
          ctx.fillStyle = COLORS[i];
          // var image = document.getElementById("postit");
          // ctx.drawImage(image, 0, 0, 150, 150);
          ctx.translate(x, y);
          ctx.rotate((((360 / this.sides) * i + 45) * Math.PI) / 180 +255);
          ctx.beginPath();
          for (let j = 0; j < 4; j++) {
              const x2 = 70 * Math.cos(angle2 * j);
              const y2 = 70 * Math.sin(angle2 * j);
              j == 0 ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
          }

          if(i == 0){
            var image = document.getElementById("pink");
            ctx.drawImage(image, 0, 0, 30, 30);
          } else if(i == 1){
            var image = document.getElementById("orange");
            ctx.drawImage(image, 0, 0, 30, 30);
          } else if(i == 2){
            var image = document.getElementById("yellow");
            ctx.drawImage(image, 0, 0, 30, 30);            
          } else if(i == 3){
            var image = document.getElementById("green");
            ctx.drawImage(image, 0, 0, 30, 30);            
          } else if(i == 4){
            var image = document.getElementById("blue");
            ctx.drawImage(image, 0, 0, 30, 30);            
          }

          function drag(target, food) {		//드래그 시작시 호출 할 함수
            food.dataTransfer.setData('Text', target.id);
          };
          function drop(target, food) {		//드롭시 호출 할 함수
            var id = food.dataTransfer.getData('Text');
            target.appendChild(document.getElementById(id));
            food.preventDefault();	
          }
          
          ctx.fill();
          ctx.closePath();
          ctx.restore();
      }

      ctx.restore();
  }
}

/*
const PI2 = Math.PI * 2;
class Polygon {
constructor(x, y, radius, sides) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.sides = sides;
  this.rotate = 0;
}
animate(ctx, moveX) {
  const angle = PI2 / this.sides;
  ctx.translate(this.x, this.y);
  this.rotate -= moveX * 0.008;
  ctx.rotate(this.rotate);
  for (let i = 0; i < this.sides; i++) {
    const x = this.radius * Math.cos(angle * i);
    const y = this.radius * Math.sin(angle * i);
    i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.fill();
  ctx.closePath();
  ctx.restore();
}
}

/*
const PI2 = Math.PI * 2;

class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx, moveX) {
    const angle = PI2 / this.sides;

    ctx.translate(this.x, this.y);

    this.rotate -= moveX * 0.008;
    ctx.rotate(this.rotate);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }

    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
*/
