const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let dino = {
    x: 50,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    jumping: false,
    velocityY: 0,
    gravity: 1.5
};

function drawDino() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#333';
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function jump() {
    if (!dino.jumping) {
        dino.jumping = true;
        dino.velocityY = -20; // Jump height
    }
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function update() {
    if (dino.jumping) {
        dino.y += dino.velocityY;
        dino.velocityY += dino.gravity;
        if (dino.y >= canvas.height - dino.height) {
            dino.jumping = false;
            dino.y = canvas.height - dino.height;
            dino.velocityY = 0;
        }
    }
}

function gameLoop() {
    drawDino();
    update();
    requestAnimationFrame(gameLoop);
}

gameLoop();
