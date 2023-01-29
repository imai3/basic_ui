//////////////////sample program//////////////////////////////

cnv = canvas()
div()
b = button("reset")
div()
t = text("背景")
s = slider()
div()
t1 = text("丸")
s1 = slider()

chara = load_image_oncanvas("mushitori_long_girl.png")
sound = load_sound("14.wav")
posi = [200, 200]
chara_posi = [100, 100]

function controll() {
	let x_ = 0
	let y_ = 0
	if (key.w) y_--
	if (key.s) y_++
	if (key.a) x_--
	if (key.d) x_++
	return norm2d([x_, y_])
}
function draw() {
	if (clicking && incanvas(cnv, mouse)) {
		posi = mouse
	}
	chara_posi = add2d(chara_posi, vecXscl(controll(), 3))
	sikaku(cnv, [0, 0], 400, 400, color(s.value, s.value, s.value))
	maru(cnv, posi, 50, color(s1.value, s1.value, s1.value))
	draw_image_oncanvas(cnv, chara, chara_posi)
	draw_image_oncanvas(cnv, chara, [190, 190])
	text_oncanvas(cnv, "Hello World!", [100, 100])
}

setInterval(draw, 60)

b.addEventListener("click", function() {
	s.value = 50
	s1.value = 50
	play_sound(sound)
})


