$(function(){
if($('body').is('.customiser')){

console.log("reached canvas");
	var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

    var x = "black";
      
    
   
		console.log("running canvas");
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext("2d");
		ctx.moveTo(0,0);
        w = canvas.width;
        h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    
		canvasGreen.onclick = function green(){
			console.log("changing colour to green");
			x = "green";
		}
		
        canvasBlue.onclick = function blue(){
			console.log("changing colour to blue");
            x = "blue";
		}
		
        canvasRed.onclick = function red(){
			console.log("changing colour to red");
            x = "red";
		}
		
        canvasYellow.onclick = function yellow(){
			console.log("changing colour to yellow");
            x = "yellow";
		}
		
        canvasOrange.onclick = function orange(){
			console.log("changing colour to orange");
            x = "orange";
		}
		
        canvasBlack.onclick = function black(){
			console.log("changing colour to black");
            x = "black";
        }
		
        canvasWhite.onclick = function white(){
			console.log("changing colour to white");
            x = "white";
		}
			

console.log(x)
    
    function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
    }
    
    clear.onclick = function erase() {
		console.log("clearing canvas");
        var m = confirm("Are you sure you want to clear the canvas");
        if (m) {
            ctx.clearRect(0, 0, w, h);
			ctx.moveTo(0,0);
            document.getElementById("canvasimg").style.display = "none";
        }
    }
    
    
    function findxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2)
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }
}
});