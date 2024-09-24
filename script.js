const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('background').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const maxSpeed = 4;
const maxSize = 4;
const depth = 1500; 

function initParticles() {
    particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: (Math.random() - 0.5) * canvas.width,
            y: (Math.random() - 0.5) * canvas.height,
            z: Math.random() * depth,
            speed: Math.random() * 2 + 1,
            size: Math.random() * maxSize,
        });
    }
}

function drawParticles() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.z -= p.speed; 
        if (p.z <= 0) {
            p.z = depth;
            p.x = (Math.random() - 0.5) * canvas.width;
            p.y = (Math.random() - 0.5) * canvas.height;
            p.size = Math.random() * maxSize;
        }

        const perspective = 300 / (p.z + 1);
        const screenX = canvas.width / 2 + p.x * perspective;
        const screenY = canvas.height / 2 + p.y * perspective;
        const size = p.size * perspective * 2; 

        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    });

    requestAnimationFrame(drawParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
drawParticles();
