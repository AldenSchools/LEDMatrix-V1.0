var canvas;
var ctx;

var WIDTH = 1200;
var HEIGHT = 800;

tileW = 16;
tileH = 16;

tileRowCount = 25;
tileColumnCount = 40;


boundX = 0;
boundY = 0;

var tiles = [];
for(c = 0; c < tileColumnCount; c++){
	tiles[c] = [];
	for(r = 0; r < tileRowCount; r++){
		tiles[c][r] = {x: c*(tileW+3), y: r*(tileH+3), state: 'e'};
	}
}

function rect(x,y,w,h,state){
	if(state == 'e'){
		ctx.fillStyle = '#AAAAAA';
	}
	else{
		ctx.fillStyle = state;//document.getElementById("color1").value;
	}
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function draw(){
	clear();
	
	for(c = 0; c < 16; c++){
		for(r = 0; r < 16; r++){
			rect(tiles[c][r].x, tiles[c][r].y, tileW, tileH, tiles[c][r].state);
		}
	}
}

function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	return setInterval(draw, 10);
}

function myMove(e){
	x = e.pageX - canvas.offsetLeft;
	y = e.pageY - canvas.offsetTop;
	
	for(c=0; c < tileColumnCount; c++){
		for(r=0; r<tileRowCount; r++){
			if(c*(tileW+3) < x && x < c*(tileW+3)+tileW && r*(tileH+3) < y && y < r*(tileH+3)+tileH){
				currentState = document.getElementById("color1").value;
				if((tiles[c][r].state == "e" || tiles[c][r].state != currentState) && (c != boundX || r != boundY)){
					tiles[c][r].state = document.getElementById("color1").value;
					boundX = c;
					boundY = r;
				}
				else if(tiles[c][r].state == currentState  && (c != boundX || r != boundY)){
					tiles[c][r].state = 'e';
					boundX = c;
					boundY = r;
					
				}
			}
		}
	}
}


function myDown(e){
	canvas.onmousemove = myMove;
	
	x = e.pageX - canvas.offsetLeft;
	y = e.pageY - canvas.offsetTop;
	
	for(c=0; c < tileColumnCount; c++){
		for(r=0; r<tileRowCount; r++){
			if(c*(tileW+3) < x && x < c*(tileW+3)+tileW && r*(tileH+3) < y && y < r*(tileH+3)+tileH){
				currentState = document.getElementById("color1").value;
				if((tiles[c][r].state == "e" || tiles[c][r].state != currentState) && (c != boundX || r != boundY)){
					tiles[c][r].state = document.getElementById("color1").value;
					boundX = c;
					boundY = r;
				}
				else if(tiles[c][r].state == currentState  && (c != boundX || r != boundY)){
					tiles[c][r].state = "e";
					boundX = c;
					bounxY = r;
				}
				
			}
		}
	}
}

function myUp(){
	canvas.onmousemove = null;
}
	
init();
canvas.onmousedown = myDown;
canvas.onmouseup = myUp;
