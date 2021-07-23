function setup() {
	createCanvas(windowWidth,windowHeight)
	arms = []
	
	tracer = []
	full_len = 0
	while (full_len < height/2){
		add_len = random(10,100)
		arms.push([add_len,random(0,TWO_PI),random(0,TWO_PI/100)])
		full_len += add_len
	}
}

function draw() {
	end = createVector(width/2,height/2)
	background(255)
	for (i=0;i<arms.length;i++){
		stroke(255,0,255)
		line(end.x,end.y,end.x + cos(arms[i][1])*arms[i][0], end.y + sin(arms[i][1])*arms[i][0])
		end.add(cos(arms[i][1])*arms[i][0],sin(arms[i][1])*arms[i][0])
		arms[i][1] += arms[i][2]
	}
	tracer.push(end)
	for (i=0;i<tracer.length-1;i++){
		stroke(255-((i/(tracer.length+1))*255))
		line(tracer[i].x,tracer[i].y,tracer[i+1].x,tracer[i+1].y)
	}
	if (tracer.length > 2000) {
		tracer.shift()
	}
	
}
