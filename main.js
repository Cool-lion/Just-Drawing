var mouseevent = "empty";
var Last_X;
var Last_Y;
var color = "blue";
var width_of_line = 10;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
     mouseevent = "mouseDown"
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave()
{
     mouseevent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
     mouseevent = "mouseUp"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
     Current_X = e.clientX - canvas.offsetLeft;
     Current_Y = e.clientY - canvas.offsetTop;

     if (mouseevent == "mouseDown") 
     {
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.lineWidth = width_of_line;

          console.log ("Last_X and Last_Y");
          console.log ("x = " + Last_X + "y = " + Last_Y);
          ctx.moveTo(Last_X,Last_Y);

          console.log("Current_X and Current_Y");
          console.log ("x = " + Current_X + "y = " + Current_Y);
          ctx.lineTo(Current_X, Current_X);
          ctx.stroke();
          }

          Last_X = Current_X;
          Last_Y = Current_Y;
}
