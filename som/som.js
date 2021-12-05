
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let N = 5;
let R;

let cols;
let rows;
let counter;
let mouseDown = false;

setup();

canvas.addEventListener('mousedown', e => {
	mouseDown = true;
	processMouse(e);
  });
  
canvas.addEventListener('mousemove', e => {
	if (mouseDown === true) {
		processMouse(e);
	}
  });
  
window.addEventListener('mouseup', () => {
	mouseDown = false;
  });
  

function processMouse(e)
{
	//console.log(e);
	const i = e.offsetX;
    const j = e.offsetY;
	const idata = ctx.getImageData(0, 0, cols, rows);
	const pixels = idata.data;
	const pos = 4*idx(i, j);
	const r1 = pixels[pos];
	const g1 = pixels[pos+1];
	const b1 = pixels[pos+2];				
	processRGB(r1, g1, b1);
}

function reGray()
{
	const W = window.innerWidth;
	const H = window.innerHeight;
	if (canvas.width != W || canvas.height != H)
	{
		canvas.width = W;
		canvas.height = H;
		//ctx.fillStyle='black';
		//ctx.fillRect(0,0,canvas.width,canvas.height);
		cols = W;
		rows = H;
		R = 0.2*(W+H);
		counter = 1;
	
		const idata = ctx.getImageData(0, 0, cols, rows);
		const pixels = idata.data;
			
		for (let i = 0; i < cols; i++) 
		{
			for (let j = 0; j < rows; j++) 
			{
				const pos = 4*idx(i, j);
				pixels[pos] = 255*Math.random();
				pixels[pos+1] = 255*Math.random();
				pixels[pos+2] = 255*Math.random();				
				pixels[pos+3] = 255;				
			}
		}

		ctx.putImageData(idata, 0, 0);
	}
}

function idx(i, j) { return i + j * cols; }

function setup() {
  reGray();  
  setInterval(draw, 0);
}

function draw() {
	reGray();
	if (mouseDown) { return; }
	
	for (let iter = 0; iter < N; ++iter)
	{
		const r1 = 256*Math.random();
		const g1 = 256*Math.random();
		const b1 = 256*Math.random();
		processRGB(r1, g1, b1);
	}

}

function processRGB(r1, g1, b1) {
	const idata = ctx.getImageData(0, 0, cols, rows);
	const pixels = idata.data;

	// find
	let bestDist = Infinity;
	let bestI = -1, bestJ = -1;

	for (let i = 1; i < cols - 1; i++) {
		for (let j = 1; j < rows - 1; j++) {
			const pos = 4 * idx(i, j);
			const dist = (pixels[pos] - r1) ** 2 +
				(pixels[pos + 1] - g1) ** 2 +
				(pixels[pos + 2] - b1) ** 2;
			if (dist < bestDist) {
				bestDist = dist;
				bestI = i;
				bestJ = j;
			}
		}
	}

	ctx.beginPath();
	ctx.fillStyle = `rgba(${r1},${g1},${b1},0.1)`;
	let rr = R / Math.pow(counter, 0.2);
	rr = rr > 5 ? rr : 5;
	ctx.fillRect(bestI - rr, bestJ - rr, 2 * rr, 2 * rr);
	++counter;
}

