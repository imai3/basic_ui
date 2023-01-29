function button(text = null) {
	let btn = document.createElement("button");
	btn.innerHTML = text;
	document.body.appendChild(btn);
	return btn
}


function slider(min = 0, max = 100, step = 1, init = 50) {
	let slide = document.createElement("input");
	slide.type = "range"
	slide.min = min
	slide.max = max
	slide.step = step
	slide.value = init
	document.body.appendChild(slide);
	return slide
}

function text(txt) {
	let t = document.createTextNode(txt)
	document.body.appendChild(t)
	return t
}
function div() {
	let d = document.createElement("div");
	document.body.appendChild(d);
	return d
}

function canvas(width = 400, height = 400) {
	let cnv = document.createElement("canvas");
	cnv.width = width
	cnv.height = height
	document.body.appendChild(cnv);
	return cnv
}

function image(url, width = 100) {
	let img = document.createElement("img");
	img.src = url
	img.width = width
	document.body.appendChild(img);
	return img
}

function load_image_oncanvas(url) {
	let chara = new Image();
	chara.src = url;
	return chara
}

function draw_image_oncanvas(cnv, chara, xy = [0, 0], width = 100, height = 100) {
	let cnt = cnv.getContext('2d');
	cnt.drawImage(chara, xy[0], xy[1], width, height)
}

function color(r, g, b) {
	return "rgb(" + r + "," + g + "," + b + ")"
}


function text_oncanvas(cnv, txt, xy = [0, 0], font = '48px serif', rgb = color(0, 0, 0)) {
	var ctx = cnv.getContext('2d');
	ctx.fillStyle = rgb
	ctx.font = font;
	ctx.fillText(txt, xy[0], xy[1]);
}



function sikaku(cnv, xy = [0, 0], w = 50, h = 50, rgb = color(100, 100, 100)) {
	let cnt = cnv.getContext('2d');
	cnt.beginPath();
	cnt.fillStyle = rgb;
	cnt.fillRect(xy[0], xy[1], w, h);
}

function maru(cnv, xy = [0, 0], r = 50, rgb = color(100, 100, 100)) {
	let cnt = cnv.getContext('2d');
	cnt.beginPath();
	cnt.fillStyle = rgb;
	cnt.arc(xy[0], xy[1], r, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
	cnt.fill();
}


touch = []
function get_touch(e) {
	touch = [e.touches[0].clientX, e.touches[0].clientY]
}
window.addEventListener("touchstart", get_touch)
window.addEventListener("touchmove", get_touch)
window.addEventListener("touchend", function(){touch = []})

mouse_x = 0
mouse_y = 0
mouse = [0, 0]
window.addEventListener("mousemove", function(e) {
	mouse_x = e.clientX
	mouse_y = e.clientY
	mouse = [mouse_x, mouse_y]
})


clicking = false
window.addEventListener("mousedown", function() {
	clicking = true
})
window.addEventListener("mouseup", function() {
	clicking = false
})

function load_sound(url) {
	let sound = document.createElement("audio");
	sound.src = url
	document.body.appendChild(sound);
	return sound
}



function play_sound() {
	sound.currentTime = 0
	sound.play();
}


key = {
	q: false,
	w: false,
	e: false,
	r: false,
	t: false,
	y: false,
	u: false,
	i: false,
	o: false,
	p: false,
	a: false,
	s: false,
	d: false,
	f: false,
	g: false,
	h: false,
	j: false,
	k: false,
	l: false,
	z: false,
	x: false,
	c: false,
	v: false,
	b: false,
	n: false,
	m: false
}

window.addEventListener("keydown", function(e) {
	if (e.key == "q") key.q = true
	if (e.key == "w") key.w = true
	if (e.key == "e") key.e = true
	if (e.key == "r") key.r = true
	if (e.key == "t") key.t = true
	if (e.key == "y") key.y = true
	if (e.key == "u") key.u = true
	if (e.key == "i") key.i = true
	if (e.key == "o") key.o = true
	if (e.key == "p") key.p = true
	if (e.key == "a") key.a = true
	if (e.key == "s") key.s = true
	if (e.key == "d") key.d = true
	if (e.key == "f") key.f = true
	if (e.key == "g") key.g = true
	if (e.key == "h") key.h = true
	if (e.key == "j") key.j = true
	if (e.key == "k") key.k = true
	if (e.key == "l") key.l = true
	if (e.key == "z") key.z = true
	if (e.key == "x") key.x = true
	if (e.key == "c") key.c = true
	if (e.key == "v") key.v = true
	if (e.key == "b") key.b = true
	if (e.key == "n") key.n = true
	if (e.key == "m") key.m = true
})


window.addEventListener("keyup", function(e) {
	if (e.key == "q") key.q = false
	if (e.key == "w") key.w = false
	if (e.key == "e") key.e = false
	if (e.key == "r") key.r = false
	if (e.key == "t") key.t = false
	if (e.key == "y") key.y = false
	if (e.key == "u") key.u = false
	if (e.key == "i") key.i = false
	if (e.key == "o") key.o = false
	if (e.key == "p") key.p = false
	if (e.key == "a") key.a = false
	if (e.key == "s") key.s = false
	if (e.key == "d") key.d = false
	if (e.key == "f") key.f = false
	if (e.key == "g") key.g = false
	if (e.key == "h") key.h = false
	if (e.key == "j") key.j = false
	if (e.key == "k") key.k = false
	if (e.key == "l") key.l = false
	if (e.key == "z") key.z = false
	if (e.key == "x") key.x = false
	if (e.key == "c") key.c = false
	if (e.key == "v") key.v = false
	if (e.key == "b") key.b = false
	if (e.key == "n") key.n = false
	if (e.key == "m") key.m = false
})


function add2d(v1, v2) {
	return [v1[0] + v2[0], v1[1] + v2[1]]
}

function sub2d(v1, v2) {
	return [v1[0] - v2[0], v1[1] - v2[1]]
}

function vecXscl(v, s) {
	return [v[0] * s, v[1] * s]
}

function norm2d(v) {
	if (v[0] == 0 && v[1] == 0) return v
	let d = Math.sqrt(v[0] ** 2 + v[1] ** 2)
	return [v[0] / d, v[1] / d]
}

function incanvas(cnv, v) {
	return 0 < v[0] && 0 < v[1] && v[0] < cnv.width && v[1] < cnv.height
}

