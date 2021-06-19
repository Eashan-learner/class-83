canvas = document.getElementById("my_canvas");
color  = "blue";
ctx = canvas.getContext("2d");
var last_position_x;
var last_position_y;
width_of_line=5;

var width=screen.width;
new_width= screen.width - 70;
new_height= screen.height - 400;
if (width < 992) {
document.getElementById(my_canvas).width=new_width;
document.getElementById(my_canvas).height=new_height;
document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart" ,lol);
function lol(e) {
    color = document.getElementById("input_id").value;    
    width_of_line = document.getElementById("input_id1").value;    
    last_position_x= e.touches[0].clientX - canvas.offsetLeft;
    last_position_y= e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove" ,lol3);
function lol3(e) {
current_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
current_position_of_y= e.touches[0].clientY - canvas.offsetTop;
 
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_x,last_position_y);
    console.log("X = " + last_position_x + " ,Y = " + last_position_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    console.log("X = " + current_position_of_x     + " ,Y = " + current_position_of_y);
ctx.stroke();
 
   last_position_x=current_position_of_x;
   last_position_y=current_position_of_y;
}


function clear_c() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
