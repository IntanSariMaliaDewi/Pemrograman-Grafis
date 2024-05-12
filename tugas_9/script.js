const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const box1 = {
    x: 100,
    y: 100,
    width: 130,
    height: 130,
    angle: 0,
    speed: 2 * Math.PI / 180 // 2 derajat per frame
};

const box2 = {
    x: 300,
    y: 100,
    width: 130,
    height: 130,
    angle: 0,
    speed: -2 * Math.PI / 180 // -2 derajat per frame
};

function drawBox(box) {
    ctx.save();
    ctx.translate(box.x + box.width / 2, box.y + box.height / 2);
    ctx.rotate(box.angle);
    ctx.fillStyle = 'blue';
    ctx.fillRect(-box.width / 2, -box.height / 2, box.width, box.height);
    ctx.restore();
}

function update() {
    // Bersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update sudut rotasi kotak 1 (searah jarum jam)
    box1.angle += box1.speed;
    if (box1.angle >= 2 * Math.PI) {
        box1.angle -= 2 * Math.PI;
    }

    // Update sudut rotasi kotak 2 (berlawanan arah jarum jam)
    box2.angle += box2.speed;
    if (box2.angle < 0) {
        box2.angle += 2 * Math.PI;
    }

    // Gambar kotak 1 dan kotak 2
    drawBox(box1);
    drawBox(box2);

    // Perbarui animasi pada frame selanjutnya
    requestAnimationFrame(update);
}

// Memulai animasi
update();
