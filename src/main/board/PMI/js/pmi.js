var ctx = document.getElementById('myCanvas').getContext("2d");
var gra = ctx.createLinearGradient(0,0,500,550);
gra.addColorStop(0, 'OrangeRed');
gra.addColorStop(0.3, 'yellow');
gra.addColorStop(0.5, 'LimeGreen');
gra.addColorStop(0.7, 'DeepSkyBlue');
gra.addColorStop(1, 'Magenta');
ctx.fillStyle = gra;
ctx.fillRect(0,0,500,550);

var circle=document.getElementById("circle");
var ctx=circle.getContext("2d");
ctx.fill();
var radius=circle.height/2;
ctx.translate(radius, radius);
radius=radius*0.90;
drawClock();
        
function drawClock() {
    drawFace(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.font="bold 20px san-serifr";
    ctx.fillStyle='DodgerBlue';
    ctx.fillText("WOW", -230, -235, 40);
    ctx.fillStyle='black';
    ctx.fillText("IDEA BOARD", -175, -235, 90);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    // tx.font="20px san-serif";
    // ctx.fillText("Good", -180, -105, 50);
    ctx.fillStyle="MistyRose";
    // ctx.fillStyle='rgba(225, 120, 120, 0.2)';
    ctx.fill();
    grad=ctx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
    grad.addColorStop(0, 'MistyRose');
    grad.addColorStop(0.5, 'MistyRose');
    grad.addColorStop(1, 'HotPink');
    ctx.strokeStyle=grad;
    ctx.lineWidth=radius*0.05;
    // tx.setLineDash([50]);
    ctx.stroke();

    ctx.beginPath();
    ctx.font="20px san-serif";
    ctx.fillStyle='gray';
    ctx.rotate(-35 * (Math.PI / 180));
    ctx.fillText("Good", -90, -165, 50);
    ctx.fillText("Best", -70, -90, 50);
    ctx.arc(0, 0, radius*0.65, 0, 2*Math.PI);
    ctx.fillStyle='rgba(225, 120, 120, 0.05)';
    ctx.fill();
    grad=ctx.createRadialGradient(0, 0, radius*0.65*0.95, 0, 0, radius*0.65*1.05);
    grad.addColorStop(0, 'rgba(225, 120, 120, 0.05)');
    grad.addColorStop(0.5, 'rgba(225, 120, 120, 0.05)');
    grad.addColorStop(1, 'HotPink');
    ctx.strokeStyle=grad;
    ctx.lineWidth=radius*0.65*0.05;
    // ctx.setLineDash([50]);
    ctx.stroke();

    ctx.beginPath();
    ctx.font="30px san-serif";
    ctx.fillStyle='gray';
    ctx.rotate(35 * (Math.PI / 180));
    ctx.fillText("Theme", -35, 10, 75);
    ctx.arc(0, 0, radius*0.35, 0, 2*Math.PI);
    ctx.fillStyle='rgba(225, 120, 120, 0.05)';
    ctx.fill();
    grad=ctx.createRadialGradient(0, 0, radius*0.35*0.95, 0, 0, radius*0.35*1.05);
    grad.addColorStop(0, 'rgba(225, 120, 120, 0.05)');
    grad.addColorStop(0.5, 'rgba(225, 120, 120, 0.05)');
    grad.addColorStop(1, 'HotPink');
    ctx.strokeStyle=grad;
    ctx.lineWidth=radius*0.35*0.05;
    // ctx.setLineDash([50]);
    ctx.stroke();
}
