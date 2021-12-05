
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let N = 100;
let R = 10;

let cols;
let rows;

setup();

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
	
    const idata = ctx.getImageData(0, 0, cols, rows);
    const pixels = idata.data;
	
	for (let iter = 0; iter < N; ++iter)
	{
		const r1 = 256*Math.random();
		const g1 = 256*Math.random();
		const b1 = 256*Math.random();
		
		// find
		let bestDist = Infinity;
		let bestI = -1, bestJ = -1;
		
		for (let i = 1; i < cols - 1; i++) 
		{
			for (let j = 1; j < rows - 1; j++) 
			{
				const pos = 4*idx(i, j);
				const dist = (pixels[pos] - r1)**2 +
							(pixels[pos+1] - g1)**2 +
							(pixels[pos+2] - b1)**2;
				if (dist < bestDist)
				{
					bestDist = dist;
					bestI = i;
					bestJ = j;
				}					
			}
		}
		// adjust
		const bestPos = 4*idx(bestI, bestJ);
//		pixels[bestPos] = 0.5*(pixels[bestPos] + r1);
//		pixels[bestPos+1] = 0.5*(pixels[bestPos+1] + g1);
//		pixels[bestPos+2] = 0.5*(pixels[bestPos+2] + b1);
		pixels[bestPos] = r1;
		pixels[bestPos+1] = g1;
		pixels[bestPos+2] = b1;
		
		for (let di=-R; di<=R; ++di)
		{
		for (let dj=-R; dj<=R; ++dj)
	    {
		//const di = Math.round(2*R*Math.random()-R);
		//const dj = Math.round(2*R*Math.random()-R);
		let w = Math.sqrt(di*di + dj*dj) / R;
		w = Math.sqrt(w);
		
		const tgtI = (cols + bestI + di) % cols;
		const tgtJ = (rows + bestJ + dj) % rows;
		
		if (w>0 && w<1)
		{
			const tgtPos = 4*idx(tgtI, tgtJ);
			pixels[tgtPos] = (w*pixels[tgtPos] + (1-w)*pixels[bestPos]);
			pixels[tgtPos+1] = (w*pixels[tgtPos+1] + (1-w)*pixels[bestPos+1]);
			pixels[tgtPos+2] = (w*pixels[tgtPos+2] + (1-w)*pixels[bestPos+2]);
		}
		}
		}
	}
	
//	for (let i=0; i<pixels.length/4; ++i)
//	{
//		pixels[4*i] = Math.max(0, pixels[4*i]-1);
//		pixels[4*i+1] = Math.max(0, pixels[4*i+1]-1);
//		pixels[4*i+2] = Math.max(0, pixels[4*i+2]-1);
//	}

	ctx.putImageData(idata, 0, 0);
}
