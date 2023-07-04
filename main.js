canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var last_position_x, last_position_y;

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown()
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup()
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave()
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_mouse_y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last position of x and y");
        console.log(last_position_x, last_position_y);
        ctx.moveTo(last_position_x, last_position_y);

        console.log("current position of x and y cordinate");
        console.log(current_position_mouse_x, current_position_mouse_y);
        ctx.lineTo(current_position_mouse_x, current_position_mouse_y);
        ctx.stroke();

    }

    last_position_x = current_position_mouse_x;
    last_position_y = current_position_mouse_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  