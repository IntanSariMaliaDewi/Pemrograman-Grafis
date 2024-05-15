const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const triangles = [
    {
        x: canvas.width / 2,
        y: 500,
        size: 80,
        angle: 0,
        speed: 0.03,
        color: getRandomColor()
    },
    {
        x: canvas.width / 2,
        y: 300,
        size: 80,
        angle: 0,
        speed: 0.03,
        color: getRandomColor()
    },
    {
        x: 200,
        y: 100,
        size: 80,
        angle: 0,
        speed: 0.03,
        color: 'green'
    },
    {
        x: 400,
        y: 100,
        size: 80,
        angle: 10,
        speed: 0.03,
        color: 'red'
    }
];

function drawTriangle(triangle) {
    ctx.save();
    ctx.translate(triangle.x, triangle.y);
    ctx.rotate(triangle.angle);
    ctx.beginPath();
    ctx.moveTo(0, -triangle.size / 2);
    ctx.lineTo(triangle.size / 2, triangle.size / 2);
    ctx.lineTo(-triangle.size / 2, triangle.size / 2);
    ctx.closePath();
    ctx.fillStyle = triangle.color;
    ctx.fill();
    ctx.restore();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    triangles.forEach(triangle => {
        triangle.angle += triangle.speed;
        drawTriangle(triangle);
    });

    requestAnimationFrame(update);
}

update();

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
