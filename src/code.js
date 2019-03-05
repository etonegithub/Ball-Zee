const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let x, y, dx, dy;

let ballRadius = 10;
/*
canvas.addEventListener('mousedown', function(){
	startAiming();
	body.addEventListener('mousemove', startAiming);
});
*/
function startGame(){
	x = canvas.width / 2;
	y = canvas.height - 15;
	drawBall(x, y);
	canvas.addEventListener('mousemove', startAiming);
	console.log('start');
}

function drawBall(x, y){
	ctx.beginPath();
	ctx.fillStyle = 'black';
	ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
}

function drawAim(finX, finY, numBalls){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(finX, finY);
	ctx.stroke();
	distX = (x - finX) / 2;
	distY = (y - finY) / 2;
	ballX = x + distX
	ballY = y + 3 / 4;
	//console.log(`finX: ${finX}, cx: ${cx}, ballX: ${ballX}`);
	drawBall(distX, distY);
	drawBall(ballX, 150);
	//console.log(`ball: ${ballX}, mid: ${midX}, fin: ${finX}`);

}

function startAiming(event){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let cx = event.offsetX - canvas.width / 2;
	let cy = canvas.height - event.offsetY + 1;
	let dcx = event.offsetX;
	let dcy = event.offsetY;
	//console.log(`X: ${dcx}, Y: ${dcy}`);
	drawBall(x, y);
	drawBall(dcx, dcy);
	drawAim(dcx, dcy, 1, cx, cy);
}