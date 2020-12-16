canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

function circle(mouse_x, mouse_y) {
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = 2;
   ctx.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
   ctx.stroke();
}
color = "yellow";
circle(250, 250);
color = "black";
circle(300, 200);
color = "green";
circle(350, 250);
color = "red";
circle(400, 200);